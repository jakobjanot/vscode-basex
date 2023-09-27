import {Uri} from "vscode";

import { XQLint } from "@quodatum/xqlint";

export interface IXQParsedEvent {
    uri: Uri;
    xqlint?: XQLint;
}

export class XQParsedEvent implements IXQParsedEvent {
    uri: Uri;
    xqlint: XQLint;

    constructor(uri: Uri,xqLint?:XQLint) {
        this.uri = uri;
        this.xqlint=xqLint;
    }
}