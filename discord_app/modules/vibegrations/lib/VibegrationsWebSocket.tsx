// discord_app/modules/vibegrations/lib/VibegrationsWebSocket.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsWebSocket.tsx");
class VibegrationsWebSocket {
  constructor() {
    return Object.assign({ socket: null });
  }
}
const prototype = VibegrationsWebSocket.prototype;
prototype["open"] = function open(ticket) {
  const self = this;
  ({ url, onEvent: closure_1, onClose: closure_2, onError: closure_3 } = ticket);
  this.close();
  const replaced = url.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:");
  const webSocket = new WebSocket("" + replaced + "/agent/ws?ticket=" + encodeURIComponent(ticket.ticket));
  this.socket = webSocket;
  const listener = webSocket.addEventListener("message", (event) => {
    if (self.socket === webSocket) {
      try {
        const _JSON = JSON;
        closure_1_1(JSON.parse(event.data));
      } catch (err) {
        return tmp;
      }
    }
  });
  const listener1 = webSocket.addEventListener("error", (event) => {
    if (self.socket === webSocket) {
      if (closure_1_3 != null) {
        tmp(event);
      }
    }
  });
  const listener2 = webSocket.addEventListener("close", () => {
    if (self.socket === webSocket) {
      if (closure_1_2 != null) {
        tmp();
      }
    }
  });
};
prototype["sendUserMessage"] = function sendUserMessage(content, nonce, attachment_ids, project_name) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "user_message", content, nonce, attachment_ids, project_name };
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
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
  const error = new Error("WebSocket not open");
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
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendDraftPatchNotes"] = function sendDraftPatchNotes(combined) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "draft_patch_notes", nonce: combined };
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendModelSettings"] = function sendModelSettings(settings) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "set_model_settings", settings };
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendLoadHistory"] = function sendLoadHistory(olderHistoryCursor) {
  const self = this;
  let tmp = null != this.socket;
  if (tmp) {
    const _WebSocket = WebSocket;
    tmp = self.socket.readyState === WebSocket.OPEN;
  }
  if (tmp) {
    const socket = self.socket;
    const _JSON = JSON;
    const obj = { type: "load_history", cursor: olderHistoryCursor };
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
  const error = new Error("WebSocket not open");
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
        const obj = { type: "capture_ack", id, status: accepted, code, message };
        socket.send(JSON.stringify(obj));
      } catch (err) {}
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
        const obj = { type: "control_ack", id, status: failed, response, message };
        socket.send(JSON.stringify(obj));
      } catch (err) {}
    }
  }
};
prototype["sendAppIconAck"] = function sendAppIconAck(attachment_id, applied) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      try {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "app_icon_ack", id: attachment_id, status: applied };
        socket.send(JSON.stringify(obj));
      } catch (err) {}
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
