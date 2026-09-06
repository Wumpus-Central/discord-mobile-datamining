// _runtime/00976_eventOriginIntegration.js
arg5.eventOriginIntegration = () => ({
  name: "EventOrigin",
  setupOnce() {},
  processEvent(tags) {
    tags = tags.tags;
    if (null === tags) {
      tags = {};
    }
    tags.tags = tags;
    tags.tags["event.origin"] = "javascript";
    tags.tags["event.environment"] = "javascript";
    return tags;
  },
});
