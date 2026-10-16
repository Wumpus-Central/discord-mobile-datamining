// discord_app/modules/conjure/connection/ConjureWebSocket.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/connection/ConjureWebSocket.tsx");
class ConjureWebSocket {
  constructor() {
    return Object.assign({ socket: null });
  }
}
const prototype = ConjureWebSocket.prototype;
prototype["open"] = function open(ticket) {
  const self = this;
  ({ url, templateId, onEvent: closure_1, onClose: closure_2, onError: closure_3 } = ticket);
  let webSocket;
  this.close();
  const replaced = url.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:");
  if (null != templateId) {
    const obj2 = { template: templateId };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const uRLSearchParams = new URLSearchParams({ ticket: ticket.ticket, debug: "on_demand" });
  webSocket = new WebSocket("" + replaced + "/agent/ws?" + uRLSearchParams);
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
      const obj2 = {
        type: "user_message",
        content,
        nonce,
        attachment_ids,
        project_name,
        template_id: tmp,
        remix: tmp2,
        clarification_answers: tmp3,
      };
      socket.send(JSON.stringify(obj2));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendUpstreamTicketAck"] = function sendUpstreamTicketAck(id, ticket, error) {
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
};
prototype["sendRetryRemix"] = function sendRetryRemix() {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "retry_remix" }));
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
prototype["sendQueuedMessageAction"] = function sendQueuedMessageAction(arg0, id) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: null, id: null };
      const _HermesInternal = HermesInternal;
      obj.type = "" + arg0 + "_queued_message";
      obj.id = id;
      socket.send(JSON.stringify(obj));
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
prototype["sendPreparePublish"] = function sendPreparePublish() {
  const self = this;
  let tmp = null != this.socket;
  if (tmp) {
    const _WebSocket = WebSocket;
    tmp = self.socket.readyState === WebSocket.OPEN;
  }
  if (tmp) {
    const socket = self.socket;
    const _JSON = JSON;
    socket.send(JSON.stringify({ type: "prepare_publish" }));
  }
};
prototype["sendDraftPatchNotes"] = function sendDraftPatchNotes(combined, name) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const obj = { type: "draft_patch_notes", nonce: combined };
      if (null != name) {
        const obj2 = { project_name: name };
        let obj3 = obj2;
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendPatchNotesSent"] = function sendPatchNotesSent(sent, source_sha) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const obj2 = {
        type: "patch_notes_sent",
        published_revision: null,
        guild_id: null,
        channel_id: null,
        message_id: null,
      };
      ({
        publishedRevision: obj3.published_revision,
        guildId: obj3.guild_id,
        channelId: obj3.channel_id,
        messageId: obj3.message_id,
      } = sent);
      if (null != source_sha) {
        const obj5 = { source_sha };
        let obj = obj5;
      } else {
        obj = {};
      }
      const merged = Object.assign(obj);
      socket.send(JSON.stringify(obj2));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendLiveReload"] = function sendLiveReload(enabled) {
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
};
prototype["sendOverlayBackgroundBlur"] = function sendOverlayBackgroundBlur(enabled) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "set_overlay_background_blur", enabled };
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendPrepareTemplate"] = function sendPrepareTemplate(template_id) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "prepare_template", template_id };
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
prototype["sendDebugSubscribe"] = function sendDebugSubscribe() {
  const self = this;
  let tmp = null != this.socket;
  if (tmp) {
    const _WebSocket = WebSocket;
    tmp = self.socket.readyState === WebSocket.OPEN;
  }
  if (tmp) {
    const socket = self.socket;
    const _JSON = JSON;
    socket.send(JSON.stringify({ type: "debug_subscribe" }));
  }
};
prototype["sendRefreshBrowserSessions"] = function sendRefreshBrowserSessions() {
  const self = this;
  let tmp = null != this.socket;
  if (tmp) {
    const _WebSocket = WebSocket;
    tmp = self.socket.readyState === WebSocket.OPEN;
  }
  if (tmp) {
    const socket = self.socket;
    const _JSON = JSON;
    socket.send(JSON.stringify({ type: "refresh_browser_sessions" }));
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
prototype["sendForceCompaction"] = function sendForceCompaction() {
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const tmp2 = flag ? { settle_pending: true } : {};
      const obj = { type: "force_compaction" };
      const merged = Object.assign(tmp2);
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendUndoContextSwitch"] = function sendUndoContextSwitch(id) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "undo_context_switch", id };
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendSmartContext"] = function sendSmartContext(enabled) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "set_smart_context", enabled };
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendRestartSandbox"] = function sendRestartSandbox() {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      socket.send(JSON.stringify({ type: "restart_sandbox" }));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendDebugGitInfoRequest"] = function sendDebugGitInfoRequest(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const tmp2 = flag ? { lite: true } : {};
      const obj = { type: "debug_git_info_request" };
      const merged = Object.assign(tmp2);
      socket.send(JSON.stringify(obj));
    }
  }
  const error = new Error("WebSocket not open");
  throw error;
};
prototype["sendRestartAgent"] = function sendRestartAgent(clear_alarm) {
  const self = this;
  if (null != this.socket) {
    const _WebSocket = WebSocket;
    if (self.socket.readyState === WebSocket.OPEN) {
      const socket = self.socket;
      const _JSON = JSON;
      const obj = { type: "restart_agent", clear_alarm };
      socket.send(JSON.stringify(obj));
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

export { ConjureWebSocket };
