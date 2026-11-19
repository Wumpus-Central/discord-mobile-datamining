// _runtime/08464_nitroFetch.js
import _nitroFetch from "08466__nitroFetch.js";
import NitroRequest from "08467_NitroRequest.js";
import normalizeName from "08468_normalizeName.js";
import decodeFormComponent from "08472_decodeFormComponent.js";
import _mod8483 from "metro/08483__.js";
import _prefetch from "08485__prefetch.js";
import _nitroFetchOnWorklet from "08486__nitroFetchOnWorklet.js";
import e from "metro/08465__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod8483.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
