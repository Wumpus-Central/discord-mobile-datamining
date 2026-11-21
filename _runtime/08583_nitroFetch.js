// _runtime/08583_nitroFetch.js
import _nitroFetch from "08585__nitroFetch.js";
import NitroRequest from "08586_NitroRequest.js";
import normalizeName from "08587_normalizeName.js";
import decodeFormComponent from "08591_decodeFormComponent.js";
import _mod8602 from "metro/08602__.js";
import _prefetch from "08604__prefetch.js";
import _nitroFetchOnWorklet from "08605__nitroFetchOnWorklet.js";
import e from "metro/08584__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod8602.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
