// _runtime/09989_nitroFetch.js
import _nitroFetch from "09991__nitroFetch.js";
import NitroRequest from "09992_NitroRequest.js";
import normalizeName from "09993_normalizeName.js";
import decodeFormComponent from "09997_decodeFormComponent.js";
import _mod10008 from "metro/10008__.js";
import _prefetch from "10010__prefetch.js";
import _nitroFetchOnWorklet from "10011__nitroFetchOnWorklet.js";
import e from "metro/09990__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod10008.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
