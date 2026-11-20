// _runtime/08463_nitroFetch.js
import _nitroFetch from "08465__nitroFetch.js";
import NitroRequest from "08466_NitroRequest.js";
import normalizeName from "08467_normalizeName.js";
import decodeFormComponent from "08471_decodeFormComponent.js";
import _mod8482 from "metro/08482__.js";
import _prefetch from "08484__prefetch.js";
import _nitroFetchOnWorklet from "08485__nitroFetchOnWorklet.js";
import e from "metro/08464__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod8482.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
