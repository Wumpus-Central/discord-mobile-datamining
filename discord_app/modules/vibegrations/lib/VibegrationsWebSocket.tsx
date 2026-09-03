// === Module 16433: open ===

// Module 16433 (open)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/vibegrations/lib/VibegrationsWebSocket.tsx");
class VibegrationsWebSocket {
}
const prototype = VibegrationsWebSocket.prototype;
prototype["open"] = function open(ticket) {
  const self = this;
  ({ url, onEvent: closure_1, onClose: closure_2, onError: closure_3 } = ticket);
  let webSocket;
  this.close();
  const replaced = url.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:");
  webSocket = new WebSocket("" + replaced + "/agent/ws?ticket=" + encodeURIComponent(ticket.ticket));
  this.socket = webSocket;
  const listener = webSocket.addEventListener("message", (data) => {
    if (self.socket === webSocket) {
      try {
        const _JSON = JSON;
        callback(JSON.parse(data.data));
      } catch (err) {
        return tmp;
      }
    }
  });
  const listener1 = webSocket.addEventListener("error", (arg0) => {
    if (self.socket === webSocket) {
      if (closure_3 != null) {
        tmp(arg0);
      }
    }
  });
  const listener2 = webSocket.addEventListener("close", () => {
    if (self.socket === webSocket) {
      if (closure_2 != null) {
        tmp();
      }
    }
  });
};
prototype["sendUserMessage"] = function sendUserMessage(arg0, arg1, arg2, arg3) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "user_message", content: null, nonce: null, attachment_ids: null, project_name: null };
      obj[1] = arg0;
      obj[2] = arg1;
      obj[3] = arg2;
      obj[4] = arg3;
      socket.send(JSON.stringify(obj));
    }
  }
  error = new Error("WebSocket not open");
  throw error;
};
prototype["sendInterrupt"] = function sendInterrupt() {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "interrupt" }));
    }
  }
  error = new Error("WebSocket not open");
  throw error;
};
prototype["sendPublish"] = function sendPublish() {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "publish" }));
    }
  }
  error = new Error("WebSocket not open");
  throw error;
};
prototype["sendModelSettings"] = function sendModelSettings(arg0) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "set_model_settings", settings: null };
      obj[1] = arg0;
      socket.send(JSON.stringify(obj));
    }
  }
  error = new Error("WebSocket not open");
  throw error;
};
prototype["sendLoadHistory"] = function sendLoadHistory(arg0) {
  const self = this;
  let tmp = null != this.socket;
  if (tmp) {
    const _WebSocket = WebSocket;
    tmp = self.socket.readyState === WebSocket.OPEN;
  }
  if (tmp) {
    const socket = self.socket;
    const _JSON = JSON;
    const obj = { type: "load_history", cursor: null };
    obj[1] = arg0;
    socket.send(JSON.stringify(obj));
  }
};
prototype["sendDebugStatusRequest"] = function sendDebugStatusRequest() {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "debug_status_request" }));
    }
  }
  error = new Error("WebSocket not open");
  throw error;
};
prototype["sendCaptureAck"] = function sendCaptureAck(id, accepted, code, message) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      try {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "capture_ack", id: null, status: null, code: null, message: null };
        obj[1] = id;
        obj[2] = accepted;
        obj[3] = code;
        obj[4] = message;
        socket.send(JSON.stringify(obj));
      } catch (err) {
      }
    }
  }
};
prototype["sendControlAck"] = function sendControlAck(id, failed, response, message) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      try {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "control_ack", id: null, status: null, response: null, message: null };
        obj[1] = id;
        obj[2] = failed;
        obj[3] = response;
        obj[4] = message;
        socket.send(JSON.stringify(obj));
      } catch (err) {
      }
    }
  }
};
prototype["sendAppIconAck"] = function sendAppIconAck(arg0, failed) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      try {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "app_icon_ack", id: null, status: null };
        obj[1] = arg0;
        obj[2] = failed;
        socket.send(JSON.stringify(obj));
      } catch (err) {
      }
    }
  }
};
prototype["close"] = function close() {
  const socket = this.socket;
  if (socket != null) {
    socket.close();
  }
  this.socket = null;
};

export { VibegrationsWebSocket };