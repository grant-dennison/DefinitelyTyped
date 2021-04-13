// Type definitions for SuperTest v2.0.1
// Project: https://github.com/visionmedia/supertest
// Definitions by: Alex Varju <https://github.com/varju>
//                 Petteri Parkkila <https://github.com/pietu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as superagent from 'superagent';

export = supertest;

declare function supertest(app: any): supertest.SuperTest<supertest.Test>;
declare namespace supertest {
    interface Response extends superagent.Response {}

    interface Request extends superagent.SuperAgentRequest {}

    type CallbackHandler = (err: any, res: Response) => void;
    interface Test extends superagent.SuperAgentRequest {
        app?: any;
        url: string;
        serverAddress(app: any, path: string): string;
        expect(status: number, callback?: CallbackHandler): this;
        expect(status: number, body: any, callback?: CallbackHandler): this;
        expect(checker: (res: Response) => any, callback?: CallbackHandler): this;
        expect(body: string, callback?: CallbackHandler): this;
        expect(body: RegExp, callback?: CallbackHandler): this;
        expect(body: Object, callback?: CallbackHandler): this;
        expect(field: string, val: string, callback?: CallbackHandler): this;
        expect(field: string, val: RegExp, callback?: CallbackHandler): this;
        end(callback?: CallbackHandler): this;
    }

    interface AgentOptions {
        ca?: any;
    }
    function agent(app?: any, options?: AgentOptions): SuperAgentTest;

    type SuperAgentTest = SuperTest<Test> &
        Pick<
            Request,
            | 'use'
            | 'on'
            | 'set'
            | 'query'
            | 'type'
            | 'accept'
            | 'auth'
            | 'withCredentials'
            | 'retry'
            | 'ok'
            | 'redirects'
            | 'timeout'
            | 'buffer'
            | 'serialize'
            | 'parse'
            | 'ca'
            | 'key'
            | 'pfx'
            | 'cert'
        >;
    interface SuperTest<T extends superagent.SuperAgentRequest> extends superagent.SuperAgent<T> {
        host(host: string): T;
    }
}
