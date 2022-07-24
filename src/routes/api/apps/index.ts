import { FastifyPluginAsync } from 'fastify';
import { generateSunflake } from 'sunflake';

import { AppEntryRoute } from './[app]';
import { AppCreateRoute } from './create';
import { AppDeleteRoute } from './delete';
import { AppLsRoute } from './ls';

export const generateSnowflake = generateSunflake();

export const AppRoute: FastifyPluginAsync = async (router, _options) => {
    router.get('/', (_request, reply) => {
        reply.send('stick');
    });

    router.register(AppLsRoute, { prefix: '/ls' });
    router.register(AppCreateRoute, { prefix: '/create' });
    router.register(AppDeleteRoute, { prefix: '/delete/:app_id' });
    router.register(AppEntryRoute, {
        prefix: '/:app_id',
    });
};
