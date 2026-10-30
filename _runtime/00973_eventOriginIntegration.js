// === Module 973: eventOriginIntegration ===

// Module 973 (eventOriginIntegration)

export () => ({
  name: "EventOrigin",
  setupOnce() {

  },
  processEvent(tags) {
    tags = tags.tags;
    if (null === tags) {
      tags = {};
    }
    tags.tags = tags;
    tags.tags["event.origin"] = "javascript";
    tags.tags["event.environment"] = "javascript";
    return tags;
  }
})