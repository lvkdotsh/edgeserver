import { Span } from '@sentry/types';
import { Readable } from 'node:stream';

export type FileData = {
    stream: NodeJS.ReadableStream;
    name: string;
    type: string;
    length: string;
};

export type ResolveData = {
    file: FileData;
    path: string;
};

export interface GenericStorage {
    get(bucket_name: string, path: string): Promise<FileData | undefined>;
    exists(
        bucket_name: string,
        path: string
    ): Promise<{ type: 'directory' | 'file' } | void>;
    traverse(
        bucket_name: string,
        path: string
    ): Promise<ResolveData | undefined>;
    put(bucket_name: string, path: string, write: Readable): Promise<void>;
    createBucket(): Promise<string>;
    uploadDirectory(
        bucket_name: string,
        prefix: string,
        path: string,
        transaction?: Span
    ): Promise<void>;
}
