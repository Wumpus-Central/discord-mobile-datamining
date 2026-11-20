// === Module 14764: DatagramConnectionRecovery ===

// Module 14764 (DatagramConnectionRecovery)
import DatagramEvent from "DatagramEvent" /* 14762 */;
import DatagramRecoveryDefault from "DatagramRecovery" /* 14765 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webtransport_datagrams/DatagramConnectionRecovery.tsx");
class DatagramConnectionRecovery {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp2 = new closure_1(closure_2[0])();
    obj.recovery = tmp2;
    set = new Set();
    obj.subscribers = set;
    obj.lease = null;
    obj.detach = null;
    obj.started = false;
    obj.closed = false;
    obj.start = function start() {
      if (!obj.closed) {
        if (0 !== obj.subscribers.size) {
          if (null == obj.lease) {
            obj.started = true;
            const acquireResult = obj.acquire();
            acquireResult.lease = acquireResult;
            const isConnected = acquireResult.connection.isConnected;
            function connect() {
              c1 = true;
              const recovery = obj.recovery;
              recovery.connected();
            }
            function disconnect() {
              if (acquireResult.lease === acquireResult) {
                const recovery = acquireResult.recovery;
                recovery.cancel();
                const detach = acquireResult.detach;
                if (detach != null) {
                  detach();
                }
                acquireResult.detach = null;
                acquireResult.lease = null;
                acquireResult.release();
                items = [];
                HermesBuiltin.arraySpread(acquireResult.subscribers, 0);
                for (const item10018 of items) {
                  let subscribers = acquireResult.subscribers;
                  if (subscribers.has(item10018)) {
                    let onDisconnectResult = item10018.onDisconnect(c1);
                  }
                  continue;
                }
                acquireResult.scheduleRecovery();
              }
            }
            acquireResult.detach = () => {
              const connection = acquireResult.connection;
              connection.off(DatagramEvent.DatagramEvent.Connect, connect);
              const connection2 = acquireResult.connection;
              connection2.off(DatagramEvent.DatagramEvent.Disconnect, disconnect);
            };
            let connection2 = acquireResult.connection;
            connection2.on(acquireResult(14762).DatagramEvent.Connect, connect);
            const connection3 = acquireResult.connection;
            connection3.on(acquireResult(14762).DatagramEvent.Disconnect, disconnect);
            items = [];
            HermesBuiltin.arraySpread(acquireResult.subscribers, 0);
            for (const item10010 of items) {
              let subscribers = obj.subscribers;
              if (subscribers.has(item10010)) {
                let onConnectionResult = item10010.onConnection(acquireResult.connection);
              }
              continue;
            }
            if (acquireResult.lease === acquireResult) {
              if (isConnected) {
                connect();
              }
              try {
                let connection = acquireResult.connection;
                connection.connect();
              } catch (err) {
                tmp2();
              }
            }
          }
        }
      }
    };
    obj.acquire = global;
    obj.onEmpty = require;
    return obj;
  }
}
const prototype = DatagramConnectionRecovery.prototype;
prototype["subscribe"] = function subscribe(onConnection) {
  const self = this;
  closure_1 = onConnection;
  let subscribers = this.subscribers;
  subscribers.add(onConnection);
  if (null != this.lease) {
    onConnection.onConnection(self.lease.connection);
  } else if (!self.started) {
    self.start();
  }
  c0 = false;
  return {
    retry() {
      let closed = c0;
      if (!c0) {
        closed = self.closed;
      }
      if (!closed) {
        closed = null != self.lease;
      }
      if (!closed) {
        const recovery = self.recovery;
        recovery.cancel();
        self.start();
      }
    },
    release() {
      if (!c0) {
        c0 = true;
        const subscribers = self.subscribers;
        subscribers.delete(closure_1);
        if (0 === self.subscribers.size) {
          self.close();
        }
      }
    }
  };
};
prototype["close"] = function close() {
  const self = this;
  if (!this.closed) {
    self.closed = true;
    const recovery = self.recovery;
    recovery.cancel();
    const detach = self.detach;
    if (detach != null) {
      detach();
    }
    self.detach = null;
    const lease = self.lease;
    if (lease != null) {
      lease.release();
    }
    self.lease = null;
    const subscribers = self.subscribers;
    subscribers.clear();
    self.onEmpty();
  }
};
prototype["scheduleRecovery"] = function scheduleRecovery() {
  const self = this;
  let closed = this.closed;
  if (!closed) {
    closed = 0 === self.subscribers.size;
  }
  if (!closed) {
    if (null == self.lease) {
      const recovery = self.recovery;
      recovery.schedule(self.start);
    }
  }
};

export default DatagramConnectionRecovery;