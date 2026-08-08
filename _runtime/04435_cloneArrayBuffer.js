// _runtime/04435_cloneArrayBuffer.js
import { 00788__ } from "metro/00788__.js";

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new 00788__(constructor);
  const result = obj.set(new 00788__(byteLength));
  return constructor;
};