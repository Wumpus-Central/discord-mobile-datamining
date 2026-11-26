// _runtime/08970_nitroFetch.js
import _nitroFetch from "08972__nitroFetch.js";
import NitroRequest from "08973_NitroRequest.js";
import normalizeName from "08974_normalizeName.js";
import decodeFormComponent from "08978_decodeFormComponent.js";
import _mod8989 from "metro/08989__.js";
import _prefetch from "08991__prefetch.js";
import _nitroFetchOnWorklet from "08992__nitroFetchOnWorklet.js";
import e from "metro/08971__.js";

export const nitroFetch = _nitroFetch.nitroFetch;
export const prefetch = _prefetch.prefetch;
export const prefetchOnAppStart = _prefetch.prefetchOnAppStart;
export const removeFromAutoPrefetch = _prefetch.removeFromAutoPrefetch;
export const removeAllFromAutoprefetch = _prefetch.removeAllFromAutoprefetch;
export const __readAutoPrefetchQueue = _prefetch.__readAutoPrefetchQueue;
export const nitroFetchOnWorklet = _nitroFetchOnWorklet.nitroFetchOnWorklet;
export const buildNitroRequestPure = _mod8989.buildNitroRequestPure;
export const NitroHeaders = normalizeName.NitroHeaders;
export const NitroResponse = decodeFormComponent.NitroResponse;
export const NitroRequestClass = NitroRequest.NitroRequest;
