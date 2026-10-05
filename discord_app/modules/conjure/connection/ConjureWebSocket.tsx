// === Module 12912: ConjureWebSocket ===

// Module 12912 (ConjureWebSocket)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/connection/ConjureWebSocket.tsx");
class ConjureWebSocket {
  constructor() {
    return Object.assign({ socket: null });
  }
  open(ticket) {
    let closure_1;
    let closure_2;
    let closure_3;
    let url;
    const self = this;
    ({ url, onEvent: closure_1, onClose: closure_2, onError: closure_3 } = ticket);
    ticket = ticket.ticket;
    this.close();
    const str = url.replace(/^https:/i, "wss:");
    const replaced = str.replace(/^http:/i, "ws:");
    const webSocket = new WebSocket("" + replaced + "/agent/ws?ticket=" + encodeURIComponent(ticket));
    this.socket = webSocket;
    const listener = webSocket.addEventListener("message", (event) => {
      if (self.socket === webSocket) {
        try {
          const _JSON = JSON;
          closure_1(JSON.parse(event.data));
        } catch (err) {
        }
      }
    });
    const listener1 = webSocket.addEventListener("error", (event) => {
      if (self.socket === webSocket) {
        if (closure_3 != null) {
          tmp(event);
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
  }
  sendUserMessage(content, nonce, attachment_ids, project_name) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj2 = { type: "user_message", content, nonce, attachment_ids, project_name, template_id: tmp, remix: tmp2, clarification_answers: tmp3 };
        socket.send(JSON.stringify(obj2));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendUpstreamTicketAck(id, ticket, error) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "upstream_ticket_ack", id, ticket, error };
        socket.send(JSON.stringify(obj));
      }
    }
    error = new Error("WebSocket not open");
    throw error;
  }
  sendInterrupt() {
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
  }
  sendPublish() {
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
  }
  sendDraftPatchNotes(combined) {
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
  }
  sendLiveReload(enabled) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const _JSON = JSON;
        const obj = { type: "set_live_reload", enabled };
        socket.send(JSON.stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendModelSettings(settings) {
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
  }
  sendLoadHistory(olderHistoryCursor) {
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
  }
  sendDebugStatusRequest() {
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
  }
  sendForceCompaction() {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        const socket = self.socket;
        const send = socket.send;
        const _JSON = JSON;
        const obj = { type: "force_compaction" };
        const tmp2 = flag ? { settle_pending: true } : {};
        const merged = Object.assign(tmp2);
        send(stringify(obj));
      }
    }
    const error = new Error("WebSocket not open");
    throw error;
  }
  sendCaptureAck(id, accepted, code, message) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        try {
          const socket = self.socket;
          const _JSON = JSON;
          const obj = { type: "capture_ack", id, status: accepted, code, message };
          socket.send(JSON.stringify(obj));
        } catch (err) {
        }
      }
    }
  }
  sendControlAck(id, failed, response, message) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        try {
          const socket = self.socket;
          const _JSON = JSON;
          const obj = { type: "control_ack", id, status: failed, response, message };
          socket.send(JSON.stringify(obj));
        } catch (err) {
        }
      }
    }
  }
  sendAppIconAck(attachment_id, applied) {
    const self = this;
    if (null != this.socket) {
      const _WebSocket = WebSocket;
      if (self.socket.readyState === WebSocket.OPEN) {
        try {
          const socket = self.socket;
          const _JSON = JSON;
          const obj = { type: "app_icon_ack", id: attachment_id, status: applied };
          socket.send(JSON.stringify(obj));
        } catch (err) {
        }
      }
    }
  }
  close() {
    const socket = this.socket;
    if (socket != null) {
      socket.close();
    }
    this.socket = null;
  }
}
const prototype = ConjureWebSocket.prototype;

export { ConjureWebSocket };