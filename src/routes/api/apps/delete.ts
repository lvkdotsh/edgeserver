import { FastifyPluginAsync } from 'fastify';

import { DB } from '../../../database';
import { useAuth } from '../../../util/http/useAuth';
import { log } from '../../../util/logging';

export const AppDeleteRoute: FastifyPluginAsync = async (router, _options) => {

    router.get('/', async (_request, reply) => {
        console.log('delete', _request.params);
        const { user_id } = await useAuth(_request, reply);

        const applications = await DB.deleteFrom(
            'applications_by_user' as 'applications',
            '*',
            {
                // app_id: _request.params.app_id.toString(),
                owner_id: user_id,
            });
        console.log({applications});
    });

}