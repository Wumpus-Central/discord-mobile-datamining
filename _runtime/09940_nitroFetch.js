// _runtime/09940_nitroFetch.js
import _nitroFetch from "09942__nitroFetch.js";
import NitroRequest from "09943_NitroRequest.js";
import normalizeName from "09944_normalizeName.js";
import decodeFormComponent from "09948_decodeFormComponent.js";
import _mod9959 from "metro/09959__.js";
import _prefetch from "09961__prefetch.js";
import _nitroFetchOnWorklet from "09962__nitroFetchOnWorklet.js";
import e from "metro/09941__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod9959.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
