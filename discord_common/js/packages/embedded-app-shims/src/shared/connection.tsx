// === Module 18785: connection ===

// Module 18785 (connection)
import Safe4 from "Safe" /* 11499 */;
import protocol from "protocol" /* 18784 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/connection.tsx");

export function createChildConnector(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c2 = null;
  c3 = null;
  return {
    offer(listen) {
      if (_null2 != null) {
        _null2.close();
      }
      _null2 = listen;
      listen.listen((type) => {
        if (type.type === protocol.ChildToParentEvent.CONNECTION_ACCEPTED) {
          if (c3 === listen) {
            if (c2 != null) {
              obj.close();
            }
            c2 = tmp6;
            c3 = null;
            closure_1();
            obj = c2;
          }
        } else if (c2 === listen) {
          listen(type);
        }
      });
    },
    dispatch(arg0) {
      if (_null != null) {
        _null.post(arg0);
      }
    },
    close() {
      if (_null != null) {
        _null.close();
      }
      if (_null2 != null) {
        _null2.close();
      }
      _null = null;
      _null2 = null;
    }
  };
}
export const offerOverWindow = function offerOverWindow(arg0, arg1, nonce, fn) {
  const messageChannel = new port1(11499).Safe.Constructor.MessageChannel();
  let Safe = port1(11499).Safe;
  const MessageChannelResult = Safe.MessageChannel(messageChannel);
  port1 = MessageChannelResult.port1;
  fn({
    post(arg0) {
      const Safe = Safe4.Safe;
      Safe.MessagePort(port1).postMessage(arg0);
    },
    listen(arg0) {
      closure_0 = arg0;
      let Safe = Safe4.Safe;
      Safe.MessagePort(port1).onmessage = (arg0) => {
        const Safe = port1(dependencyMap[1]).Safe;
        return closure_0(Safe.MessageEvent(arg0).data);
      };
    },
    close() {
      const Safe = Safe4.Safe;
      Safe.MessagePort(port1).close();
    }
  });
  const Safe2 = port1(11499).Safe;
  const WindowResult = Safe2.Window(arg0);
  const obj = {
    post(arg0) {
      const Safe = Safe4.Safe;
      Safe.MessagePort(port1).postMessage(arg0);
    },
    listen(arg0) {
      closure_0 = arg0;
      let Safe = Safe4.Safe;
      Safe.MessagePort(port1).onmessage = (arg0) => {
        const Safe = port1(dependencyMap[1]).Safe;
        return closure_0(Safe.MessageEvent(arg0).data);
      };
    },
    close() {
      const Safe = Safe4.Safe;
      Safe.MessagePort(port1).close();
    }
  };
  const Safe3 = port1(11499).Safe;
  const items = [MessageChannelResult.port2];
  WindowResult.postMessage({ [closure_0(closure_1[0]).SHIM_MESSAGE_KEY]: "connection_open", nonce }, arg1, Safe3.asIterable(items));
};