// === Module 1752: ? ===

// Module 1752
import NativeWorklets from "NativeWorklets" /* 1709 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1716 */;

require = arg1;
const dependencyMap = arg6;

export function createShareable(arg0, __initData, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  const guestDecorator = obj.guestDecorator;
  ({ hostDecorator, initSynchronously } = obj);
  const WorkletsModule = NativeWorklets.WorkletsModule;
  const serializable = registerCustomSerializable.createSerializable(__initData);
  const tmp2 = !initSynchronously;
  const serializable1 = registerCustomSerializable.createSerializable(hostDecorator);
  return globalThis.__shareableGuestUnpacker(arg0, WorkletsModule.createShareable(arg0, serializable, !tmp2, serializable1, registerCustomSerializable.createSerializable(guestDecorator)), guestDecorator);
}