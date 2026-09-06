// _runtime/metro/14415__.js
import assertHasLoggerPlugin2 from "../14417_assertHasLoggerPlugin.js";
import assertHasStateResponsePlugin2 from "../14420_assertHasStateResponsePlugin.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import 14416__ from "14416__.js";
import 14418__ from "14418__.js";
import 14419__ from "14419__.js";
import 14421__ from "14421__.js";
import 14422__ from "14422__.js";
import repl from "../14423_repl.js";
import serialize from "../14424_serialize.js";

const ReactotronImpl = require;
function emptyPromise() {
  return Promise.resolve("");
}
if (!module_14416) {
  const obj1 = { default: module_14416 };
  let tmp7 = obj1;
} else {
  tmp7 = module_14416;
}
module_14416 = tmp7;
let assertHasLoggerPlugin = _interopRequireWildcard(assertHasLoggerPlugin2);
if (!module_14418) {
  const obj2 = { default: module_14418 };
  let obj5 = obj2;
} else {
  obj5 = module_14418;
}
if (!module_14419) {
  const obj3 = { default: module_14419 };
  let obj7 = obj3;
} else {
  obj7 = module_14419;
}
const assertHasStateResponsePlugin = _interopRequireWildcard(assertHasStateResponsePlugin2);
if (!module_14421) {
  assertHasLoggerPlugin = { default: module_14421 };
  let obj11 = assertHasLoggerPlugin;
} else {
  obj11 = module_14421;
}
if (!module_14422) {
  obj5 = { default: module_14422 };
  let obj13 = obj5;
} else {
  obj13 = module_14422;
}
if (!repl) {
  const obj6 = { default: repl };
  let obj15 = obj6;
} else {
  obj15 = repl;
}
if (!serialize) {
  obj7 = { default: serialize };
  let tmp14 = obj7;
} else {
  tmp14 = serialize;
}
serialize = tmp14;
const items = [obj5.default(), assertHasLoggerPlugin.default(), obj7.default(), assertHasStateResponsePlugin.default(), obj11.default(), obj13.default(), obj15.default()];
let closure_9 = ["configure", "connect", "connected", "options", "plugins", "send", "socket", "startTimer", "use"];
class ReactotronImpl {
  constructor() {
    self = this;
    tmp = c2(this, ReactotronImpl);
    this.connected = false;
    this.socket = null;
    this.plugins = [];
    this.sendQueue = [];
    this.isReady = false;
    date = new Date();
    this.lastMessageDate = date;
    this.customCommands = [];
    this.customCommandLatestId = 1;
    this.startTimer = () => self(dependencyMap[11]).start();
    this.send = (type, payload, important) => {
      const date = new Date();
      const lastMessageDate = self.lastMessageDate;
      const time = date.getTime();
      let num = time - lastMessageDate.getTime();
      if (num < 0) {
        num = 0;
      }
      self.lastMessageDate = date;
      const action = { type, payload, important, date: date.toISOString(), deltaTime: num };
      const defaultResult = serialize.default(action, self.options.proxyHack);
      if (self.isReady) {
        try {
          const socket = tmp4.socket;
          socket.send(defaultResult);
        } catch (err) {
          tmp2.isReady = false;
          const _console = tmp.console;
          _console.log("An error occurred communicating with reactotron. Please reload your app");
        }
      } else {
        const sendQueue = tmp4.sendQueue;
        sendQueue.push(defaultResult);
      }
    };
    return;
  }
}
const entry = {
  key: "configure",
  value: function configure(arg0) {
    const self = this;
    const url = {
      createSocket: null,
      host: "localhost",
      port: 9090,
      name: "reactotron-core-client",
      secure: false,
      plugins: items,
      safeRecursion: true,
      onCommand() {
        return null;
      },
      onConnect() {
        return null;
      },
      onDisconnect() {
        return null;
      }
    };
    const merged = Object.assign(url, this.options, arg0);
    module_14416.default(merged);
    this.options = merged;
    if (Array.isArray(this.options.plugins)) {
      const plugins = self.options.plugins;
      const item = plugins.forEach((item) => self.use(item));
    }
    return self;
  }
};
const items1 = [
  entry,
  {
    key: "close",
    value: function close() {
      const self = this;
      this.connected = false;
      if (tmp) {
        const socket = self.socket;
        socket.close();
      }
    }
  },
  {
    key: "connect",
    value: function connect() {
      const self = this;
      this.connected = true;
      let options = this.options;
      ({ host, environment: dependencyMap, port, name: _classCallCheck, client } = options);
      ({ createSocket, secure } = options);
      if (undefined === client) {
        client = {};
      }
      const getClientId = options.getClientId;
      ({ onCommand: assertHasStateResponsePlugin, onConnect: serialize, onDisconnect: _interopRequireWildcard } = self.options);
      let str = "ws";
      if (secure) {
        str = "wss";
      }
      let socket = createSocket("" + str + "://" + host + ":" + port);
      function onOpen() {
        if (serialize) {
          tmp();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onConnect) => onConnect.onConnect && onConnect.onConnect());
        let tmp4 = getClientId;
        if (!getClientId) {
          tmp4 = emptyPromise;
        }
        tmp4(_classCallCheck).then((clientId) => {
          let length;
          self.isReady = true;
          const obj = { environment };
          const merged = Object.assign(client);
          obj.name = name;
          obj.clientId = clientId;
          obj.reactotronCoreClientVersion = "REACTOTRON_CORE_CLIENT_VERSION";
          self.send("client.intro", obj);
          if (self.sendQueue.length > 0) {
            do {
              let sendQueue = self.sendQueue;
              self.sendQueue = sendQueue.slice(1);
              let socket = self.socket;
              let sendResult1 = socket.send(self.sendQueue[0]);
              length = self.sendQueue.length;
            } while (length > 0);
          }
        });
      }
      function onClose() {
        self.isReady = false;
        if (_interopRequireWildcard) {
          tmp2();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onDisconnect) => onDisconnect.onDisconnect && onDisconnect.onDisconnect());
      }
      function onMessage(str) {
        if (typeof str === "string") {
          const _JSON2 = JSON;
          let action = JSON.parse(str);
        } else {
          const _Buffer = Buffer;
          action = str;
          if (Buffer.isBuffer(str)) {
            const _JSON = JSON;
            action = JSON.parse(str.toString());
          }
        }
        if (assertHasStateResponsePlugin) {
          tmp2(action);
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onCommand) => {
          onCommand = onCommand.onCommand;
          if (onCommand) {
            onCommand = onCommand.onCommand(action);
          }
          return onCommand;
        });
        if ("custom" === action.type) {
          const customCommands = tmp4.customCommands;
          const found = customCommands.filter((command) => {
            if (typeof action.payload === "string") {
              let tmp2 = command.command === tmp.payload;
            } else {
              tmp2 = command.command === tmp.payload.command;
            }
            return tmp2;
          });
          const item1 = found.forEach((handler) => {
            let args;
            if (typeof action.payload === "object") {
              args = action.payload.args;
            }
            return handler.handler(args);
          });
        } else {
          if (tmp6) {
            const options = tmp4.options;
            options.setClientId(action.payload);
          }
          tmp6 = "setClientId" === action.type && tmp4.options.setClientId;
        }
      }
      if ("on" in socket) {
        if (socket.on) {
          socket.on("open", onOpen);
          socket.on("close", onClose);
          socket.on("message", onMessage);
          self.socket = socket;
        }
        return self;
      }
      socket.onopen = onOpen;
      socket.onclose = onClose;
      socket.onmessage = (data) => {
        onMessage(data.data);
      };
      self.socket = socket;
    }
  },
  {
    key: "display",
    value: function display(activity) {
      ({ value, preview, image, important } = activity);
      let tmp = undefined !== important;
      if (tmp) {
        tmp = important;
      }
      const obj = { name: activity.name, value, preview, image };
      this.send("display", obj, tmp);
    }
  },
  {
    key: "reportError",
    value: function reportError(arg0) {
      this.error(arg0);
    }
  },
  {
    key: "use",
    value: function use(bind) {
      const self = this;
      if (typeof bind !== "function") {
        const _Error3 = Error;
        let error = new Error("plugins must be a function");
        throw error;
      } else {
        const tmp19 = bind.bind(self)(self);
        const features = tmp19;
        if (typeof tmp19 !== "object") {
          let _Error2 = Error;
          let error1 = new Error("plugins must return an object");
          throw error1;
        } else {
          if (tmp19.features) {
            if (typeof tmp19.features !== "object") {
              let _Error = Error;
              const error2 = new Error("features must be an object");
              throw error2;
            } else {
              function inject(arg0) {

              }
              const _Object = Object;
              const keys = Object.keys(tmp19.features);
              const item = keys.forEach((item) => {
                if (typeof inject === "function") {
                  if (typeof features.features[item] !== "function") {
                    const _Error2 = Error;
                    const _HermesInternal2 = HermesInternal;
                    const error = new Error("feature " + item + " is not a function");
                    throw error;
                  } else {
                    closure_0 = item;
                    if (closure_9.some((item) => item === closure_0)) {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      const error1 = new Error("feature " + item + " is a reserved name");
                      throw error1;
                    } else {
                      self[item] = tmp3;
                    }
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
            }
          }
          const plugins = self.plugins;
          plugins.push(tmp19);
          if (tmp2) {
            const onPlugin = tmp19.onPlugin;
            onPlugin.bind(self)(self);
          }
          return self;
        }
      }
    }
  },
  {
    key: "onCustomCommand",
    value: function onCustomCommand(command, arg1) {
      const self = this;
      if (typeof command === "string") {
        handler = arg1;
      } else {
        command = command.command;
        ({ handler, title, description, args } = command);
      }
      if (tmp) {
        if (handler) {
          let customCommands = self.customCommands;
          const found = customCommands.filter((command) => command.command === command);
          if (found.length > 0) {
            const item = found.forEach((id) => {
              const customCommands = self.customCommands;
              self.customCommands = customCommands.filter((id) => id.id !== id.id);
              self.send("customCommand.unregister", { id: id.id, command: id.command });
            });
          }
          if (args) {
            closure_2 = [];
            const item1 = args.forEach((name) => {
              if (name.name) {
                let arr = closure_2;
                if (closure_2.indexOf(name.name) > -1) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const error = new Error("A arg with the name \"" + name.name + "\" already exists in the command \"" + command + "\"");
                  throw error;
                } else {
                  arr = arr.push(name.name);
                }
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error1 = new Error("A arg on the command \"" + command + "\" is missing a name");
                throw error1;
              }
            });
          }
          let obj = { id: self.customCommandLatestId, command: tmp, handler, title, description, args };
          self.customCommandLatestId = self.customCommandLatestId + 1;
          const customCommands1 = self.customCommands;
          customCommands1.push(obj);
          obj = { id: null, command: null, title: null, description: null, args: null };
          ({ id: obj2.id, command: obj2.command, title: obj2.title, description: obj2.description, args: obj2.args } = obj);
          self.send("customCommand.register", obj);
          return () => {
            const customCommands = self.customCommands;
            self.customCommands = customCommands.filter((id) => id.id !== id.id);
            obj = { id: obj.id, command: obj.command };
            self.send("customCommand.unregister", obj);
          };
        } else {
          let _Error2 = Error;
          let _HermesInternal = HermesInternal;
          let error = new Error("A handler is required for command \"" + tmp + "\"");
          throw error;
        }
      } else {
        let _Error = Error;
        let error1 = new Error("A command is required");
        throw error1;
      }
    }
  }
];
const _moduleResult = _createClass(ReactotronImpl, items1);

export const assertHasLoggerPlugin = assertHasStateResponsePlugin.hasStateResponsePlugin;
export const assertHasStateResponsePlugin = assertHasStateResponsePlugin.hasStateResponsePlugin;
export const createClient = function createClient(url) {
  return new _moduleResult().configure(url);
};
export const hasStateResponsePlugin = assertHasStateResponsePlugin.hasStateResponsePlugin;
export const ArgType = { String: "string" };
export const corePlugins = items;
export const ReactotronImpl = _moduleResult;