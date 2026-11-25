// _runtime/08928_nitroFetch.js
import _nitroFetch from "08930__nitroFetch.js";
import NitroRequest from "08931_NitroRequest.js";
import normalizeName from "08932_normalizeName.js";
import decodeFormComponent from "08936_decodeFormComponent.js";
import _mod8947 from "metro/08947__.js";
import _prefetch from "08949__prefetch.js";
import _nitroFetchOnWorklet from "08950__nitroFetchOnWorklet.js";
import e from "metro/08929__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod8947.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
