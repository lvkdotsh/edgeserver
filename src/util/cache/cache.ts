type CachedData<T> = [number, T];
const cache: Record<string, CachedData<unknown>> = {};

export const updateCache = (key: string, value: unknown, ttl: number = 600) => {
    cache[key] = [Date.now() + ttl, value];
};

export const getCache = <T>(key: string) => {
    const data = cache[key];

    if (!data) return;

    if (data.at(0) < Date.now()) return;

    return data.at(1) as T;
};