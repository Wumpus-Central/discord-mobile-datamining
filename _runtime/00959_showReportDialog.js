// === Module 959: showReportDialog ===

// Module 959 (showReportDialog)
import _mod904 from "module_904" /* 904 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const showReportDialog = function showReportDialog(arg0) {
  let eventId;
  let obj3;
  let onClose;
  let onLoad;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  onClose = undefined;
  let reportDialogClosedMessageHandler;
  const _document = onClose(reportDialogClosedMessageHandler[0]).WINDOW.document;
  let head;
  if (_document != null) {
    head = _document.head;
  }
  if (!head) {
    let body;
    if (_document != null) {
      body = _document.body;
    }
    head = body;
  }
  if (head) {
    const tmpResult = onClose(reportDialogClosedMessageHandler[2]);
    const currentScope = tmpResult.getCurrentScope();
    const tmpResult4 = onClose(reportDialogClosedMessageHandler[2]);
    const client = tmpResult4.getClient();
    let dsn;
    if (client != null) {
      dsn = client.getDsn();
    }
    if (dsn) {
      const obj2 = { user: obj3, eventId };
      const merged = Object.assign(obj);
      obj3 = {};
      const merged1 = Object.assign(currentScope.getUser());
      const merged2 = Object.assign(obj.user);
      eventId = obj.eventId;
      if (!eventId) {
        const tmpResult5 = onClose(reportDialogClosedMessageHandler[2]);
        eventId = tmpResult5.lastEventId();
      }
      const _document2 = tmp(tmp2[0]).WINDOW.document;
      const element = <script />;
      element.async = true;
      element.crossOrigin = "anonymous";
      const tmpResult6 = onClose(reportDialogClosedMessageHandler[2]);
      element.src = tmpResult6.getReportDialogEndpoint(dsn, obj2);
      ({ onLoad, onClose } = obj2);
      if (onLoad) {
        element.onload = onLoad;
      }
      if (onClose) {
        reportDialogClosedMessageHandler = function reportDialogClosedMessageHandler(event) {
          if ("__sentry_reportdialog_closed__" === event.data) {
            try {
              onClose();
              const WINDOW = _mod904.WINDOW;
              const removed = WINDOW.removeEventListener("message", reportDialogClosedMessageHandler);
            } catch (tmp7) {
              const WINDOW2 = _mod904.WINDOW;
              const removed1 = WINDOW2.removeEventListener("message", reportDialogClosedMessageHandler);
              throw tmp7;
            }
          }
        };
        let WINDOW = tmp(tmp2[0]).WINDOW;
        const listener = WINDOW.addEventListener("message", reportDialogClosedMessageHandler);
      }
      head.appendChild(element);
    } else if (onClose(reportDialogClosedMessageHandler[1]).DEBUG_BUILD) {
      const debug2 = tmp(tmp2[2]).debug;
      debug2.error("[showReportDialog] DSN not configured");
    }
  } else if (onClose(reportDialogClosedMessageHandler[1]).DEBUG_BUILD) {
    const debug = tmp(tmp2[2]).debug;
    debug.error("[showReportDialog] Global document not defined");
  }
};