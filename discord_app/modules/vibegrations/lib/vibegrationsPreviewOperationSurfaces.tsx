// === Module 13281: vibegrationsPreviewOperationSurfaces ===

// Module 13281 (vibegrationsPreviewOperationSurfaces)
import vibegrationsPreviewControlLease from "vibegrationsPreviewControlLease" /* 13278 */;
import size from "module_2" /* 2 */;

function bestEffort(arg0, fn) {
  try {
    fn();
  } catch (err) {
  }
}
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewOperationSurfaces.tsx");

export const createPreviewOperationSurfaces = function createPreviewOperationSurfaces(arg0) {
  closure_0 = arg0;
  let map = new Map();
  return {
    begin(TableRowGroup) {
      let result = TableRowGroup(map[0]).beginVibegrationsControlOperation(TableRowGroup);
      const tmp2 = TableRowGroup(TableRowGroup);
      if (null != tmp2) {
        value = map.get(TableRowGroup);
        closure_2 = value;
        if (null != value) {
          obj2.delete(TableRowGroup);
          bestEffort(0, () => value.end());
        }
        bestEffort(0, () => closure_1.dismiss());
        bestEffort(0, () => {
          const openResult = map.open();
          TableRowGroup = openResult;
          map = TableRowGroup(map[0]).subscribeVibegrationsControl(() => {
            if (!obj.isVibegrationsControlActive(openResult)) {
              value = map.get(tmp);
              if (null != value) {
                map.delete(tmp);
                closure_1_2(0, () => value.end());
              }
              const result = value(map[0]).endVibegrationsControlOperation(tmp);
              const obj3 = value(map[0]);
            }
            obj = openResult(map[0]);
          });
          let result = map.set(TableRowGroup, {
            iframeId: openResult.iframeId,
            drain() {
              return openResult.drain();
            },
            end() {
              map();
              openResult.end();
            }
          });
        });
        obj2 = map;
      }
      let obj = TableRowGroup(map[0]);
    },
    end(openResult) {
      value = map.get(openResult);
      closure_0 = value;
      if (null != value) {
        map.delete(openResult);
        bestEffort(0, () => value.end());
      }
      const result = vibegrationsPreviewControlLease.endVibegrationsControlOperation(openResult);
    },
    drain(arg0) {
      value = map.get(arg0);
      let drainResult;
      if (value != null) {
        drainResult = value.drain();
      }
      if (drainResult == null) {
        drainResult = [];
      }
      return drainResult;
    }
  };
};