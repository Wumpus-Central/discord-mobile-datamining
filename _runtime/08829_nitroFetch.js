// _runtime/08829_nitroFetch.js
import _nitroFetch from "08831__nitroFetch.js";
import NitroRequest from "08832_NitroRequest.js";
import normalizeName from "08833_normalizeName.js";
import decodeFormComponent from "08837_decodeFormComponent.js";
import _mod8848 from "metro/08848__.js";
import _prefetch from "08850__prefetch.js";
import _nitroFetchOnWorklet from "08851__nitroFetchOnWorklet.js";
import e from "metro/08830__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod8848.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
