// === Module 1083: showReportDialog ===

// Module 1083 (showReportDialog)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.showReportDialog = function showReportDialog(arg0) {
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
    let tmpResult = tmp(tmp2[2]);
    const currentScope = tmpResult.getCurrentScope();
    tmpResult = tmp(tmp2[2]);
    const client = tmpResult.getClient();
    let dsn;
    if (client != null) {
      dsn = client.getDsn();
    }
    if (dsn) {
      obj = {};
      const merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(currentScope.getUser());
      const merged2 = Object.assign(obj.user);
      obj.user = obj;
      let eventId = obj.eventId;
      if (!eventId) {
        eventId = tmp(tmp2[2]).lastEventId();
        const tmpResult1 = tmp(tmp2[2]);
      }
      obj.eventId = eventId;
      const _document2 = tmp(tmp2[0]).WINDOW.document;
      const element = <script />;
      element.async = true;
      element.crossOrigin = "anonymous";
      element.src = tmp(tmp2[2]).getReportDialogEndpoint(dsn, obj);
      ({ onLoad, onClose } = obj);
      if (onLoad) {
        element.onload = onLoad;
      }
      if (onClose) {
        reportDialogClosedMessageHandler = function reportDialogClosedMessageHandler(event) {
          if ("__sentry_reportdialog_closed__" === event.data) {
            try {
              onClose();
              const WINDOW = onClose(reportDialogClosedMessageHandler[0]).WINDOW;
              const removed = WINDOW.removeEventListener("message", reportDialogClosedMessageHandler);
            } catch (tmp7) {
              const WINDOW2 = onClose(reportDialogClosedMessageHandler[0]).WINDOW;
              const removed1 = WINDOW2.removeEventListener("message", reportDialogClosedMessageHandler);
              throw tmp7;
            }
          }
        };
        let WINDOW = tmp(tmp2[0]).WINDOW;
        const listener = WINDOW.addEventListener("message", reportDialogClosedMessageHandler);
      }
      head.appendChild(element);
      const tmpResult2 = tmp(tmp2[2]);
    } else if (tmp(tmp2[1]).DEBUG_BUILD) {
      const debug2 = tmp(tmp2[2]).debug;
      debug2.error("[showReportDialog] DSN not configured");
    }
  } else if (tmp(tmp2[1]).DEBUG_BUILD) {
    const debug = tmp(tmp2[2]).debug;
    debug.error("[showReportDialog] Global document not defined");
  }
};