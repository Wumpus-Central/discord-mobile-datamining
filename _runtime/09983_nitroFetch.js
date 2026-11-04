// _runtime/09983_nitroFetch.js
import _nitroFetch from "09985__nitroFetch.js";
import NitroRequest from "09986_NitroRequest.js";
import normalizeName from "09987_normalizeName.js";
import decodeFormComponent from "09991_decodeFormComponent.js";
import _mod10002 from "metro/10002__.js";
import _prefetch from "10004__prefetch.js";
import _nitroFetchOnWorklet from "10005__nitroFetchOnWorklet.js";
import e from "metro/09984__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod10002.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
