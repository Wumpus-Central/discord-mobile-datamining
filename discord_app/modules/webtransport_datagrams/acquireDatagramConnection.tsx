// === Module 15099: acquireDatagramConnection ===

// Module 15099 (acquireDatagramConnection)
import DatagramConnectionRecoveryDefault from "DatagramConnectionRecovery" /* 15103 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function acquireDatagramConnection(rTCConnection, userId) {
  _require = rTCConnection;
  value = weakMap.get(rTCConnection);
  if (null == value) {
    if (value != null) {
      let connection = value.connection;
      connection.close();
    }
    const obj2 = { connection: null, users: 0, userId: null };
    const datagramConnection = new require("DatagramConnection").DatagramConnection(rTCConnection, userId);
    obj2.connection = datagramConnection;
    obj2.userId = userId;
    const result = weakMap.set(rTCConnection, obj2);
    const connection2 = obj2.connection;
    connection2.on(require("DatagramEvent").DatagramEvent.Disconnect, () => {
      if (weakMap.get(closure_0) === obj2) {
        weakMap.delete(closure_0);
      }
    });
    let tmp2 = obj2;
  } else {
    tmp2 = value;
  }
  tmp2.users = tmp2.users + 1;
  dependencyMap = tmp2;
  weakMap = false;
  return {
    connection: tmp2.connection,
    release() {
      if (!c3) {
        c3 = true;
        const diff = value.users - 1;
        value.users = diff;
        if (0 == diff) {
          const connection = value.connection;
          connection.close();
          if (weakMap.get(closure_0) === value) {
            weakMap.delete(closure_0);
          }
        }
      }
    }
  };
}
let weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = size.fileFinishedImporting("modules/webtransport_datagrams/acquireDatagramConnection.tsx");

export { acquireDatagramConnection };
export function subscribeToDatagramConnection(arg0, userId, arg2) {
  closure_0 = arg0;
  importDefault = userId;
  value = weakMap1.get(arg0);
  if (null == value) {
    if (value != null) {
      let owner = value.owner;
      owner.close();
    }
    const tmp8 = new DatagramConnectionRecoveryDefault(() => acquireDatagramConnection(closure_0, closure_1), () => {
      value = weakMap1.get(closure_0);
      let owner;
      if (value != null) {
        owner = value.owner;
      }
      if (owner === closure_2) {
        weakMap1.delete(closure_0);
      }
    });
    dependencyMap = tmp8;
    const obj2 = { userId, owner: tmp8 };
    const result = weakMap1.set(arg0, obj2);
    let tmp2 = obj2;
  } else {
    tmp2 = value;
  }
  const owner2 = tmp2.owner;
  return owner2.subscribe(arg2);
}