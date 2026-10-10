// discord_app/modules/conjure/preview/native/useConjurePreviewMenu.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import conjureExternalConnections from "../../external_connections/conjureExternalConnections.tsx";
import conjureProjectMenuItems from "../../projects/conjureProjectMenuItems.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/native/useConjurePreviewMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePreviewMenu(projectId) {
      const cResult = projectId(connect[3]).c(18);
      projectId = projectId.projectId;
      const refreshApplicationId = projectId.refreshApplicationId;
      let obj = projectId(connect[3]);
      ({ pending, refresh } = refresh(connect[4])(refreshApplicationId));
      const tmp4 = refresh(connect[4])(refreshApplicationId);
      const conjureConnectActions = projectId(connect[5]).useConjureConnectActions(
        projectId,
        projectId(connect[6]).presentError,
      );
      ({ pending: pending2, connect } = conjureConnectActions);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureConnectionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function s() {
          return ConjureConnectionStore.getDeclaredConnections(projectId);
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj2 = projectId(connect[5]);
      const stateFromStores = projectId(connect[7]).useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        const result = tmp(connect[8]).externalConnectionOffers(stateFromStores);
        cResult[4] = stateFromStores;
        cResult[5] = result;
        let tmp11 = result;
        const tmpResult3 = tmp(connect[8]);
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === pending2) {
        if (cResult[7] === tmp11) {
          if (cResult[8] === pending) {
            if (cResult[9] === tmp13) {
              let tmp14 = cResult[10];
            }
            if (cResult[11] === connect) {
              if (cResult[12] === stateFromStores) {
                if (cResult[13] === refresh) {
                  let tmp16 = cResult[14];
                }
                if (cResult[15] === tmp14) {
                  if (cResult[16] === tmp16) {
                    let tmp17 = cResult[17];
                  }
                  return tmp17;
                }
                class E {
                  constructor(arg0) {
                    closure_0 = projectId;
                    if ("refresh" !== projectId.kind) {
                      tmp3 = closure_3;
                      found = closure_3.find((type) => type.type === kind.connectionType);
                      tmp5 = null;
                      if (null != found) {
                        if (found.configured) {
                          tmp10 = connect;
                          tmp11 = connect(found);
                        } else {
                          tmp6 = closure_0;
                          tmp7 = closure_2;
                          obj = closure_0(closure_2[6]);
                          intl = closure_0(closure_2[10]).intl;
                          tmp8 = closure_1;
                          presentErrorResult = obj.presentError(intl.string(closure_1(closure_2[11])["jCQ/1B"]));
                        }
                      }
                    } else {
                      tmp = refresh;
                      tmp2 = refresh();
                    }
                    return;
                  }
                }
                tmp18[0] = tmp14;
                tmp18[1] = tmp16;
                cResult[15] = tmp14;
                cResult[16] = tmp16;
                cResult[17] = tmp18;
                tmp17 = tmp18;
              }
            }
            class E {
              constructor(arg0) {
                closure_0 = projectId;
                if ("refresh" !== projectId.kind) {
                  tmp3 = closure_3;
                  found = closure_3.find((type) => type.type === kind.connectionType);
                  tmp5 = null;
                  if (null != found) {
                    if (found.configured) {
                      tmp10 = connect;
                      tmp11 = connect(found);
                    } else {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj = closure_0(closure_2[6]);
                      intl = closure_0(closure_2[10]).intl;
                      tmp8 = closure_1;
                      presentErrorResult = obj.presentError(intl.string(closure_1(closure_2[11])["jCQ/1B"]));
                    }
                  }
                } else {
                  tmp = refresh;
                  tmp2 = refresh();
                }
                return;
              }
            }
            cResult[11] = connect;
            cResult[12] = stateFromStores;
            cResult[13] = refresh;
            cResult[14] = E;
            tmp16 = E;
          }
        }
      }
      const tmpResult = projectId(connect[7]);
      const previewMenuItemsResult = projectId(connect[9]).previewMenuItems({
        canRefresh: null != refreshApplicationId,
        refreshPending: pending,
        offers: tmp11,
        connectPending: pending2,
      });
      cResult[6] = pending2;
      cResult[7] = tmp11;
      cResult[8] = pending;
      cResult[9] = null != refreshApplicationId;
      cResult[10] = previewMenuItemsResult;
      tmp14 = previewMenuItemsResult;
      const tmpResult4 = projectId(connect[9]);
    }
  : function useConjurePreviewMenu(projectId) {
      projectId = projectId.projectId;
      const refreshApplicationId = projectId.refreshApplicationId;
      let pending;
      const tmp = refreshApplicationId(pending[4])(refreshApplicationId);
      pending = tmp.pending;
      const refresh = tmp.refresh;
      const conjureConnectActions = projectId(pending[5]).useConjureConnectActions(
        projectId,
        projectId(pending[6]).presentError,
      );
      const pending2 = conjureConnectActions.pending;
      const connect = conjureConnectActions.connect;
      let obj = projectId(pending[5]);
      const items = [pending2];
      const items1 = [projectId];
      const stateFromStores = projectId(pending[7]).useStateFromStores(
        items,
        () => ConjureConnectionStore.getDeclaredConnections(projectId),
        items1,
      );
      const items2 = [stateFromStores];
      const memo = refresh.useMemo(() => conjureExternalConnections.externalConnectionOffers(stateFromStores), items2);
      const items3 = [pending2, memo, refreshApplicationId, pending];
      const memo1 = refresh.useMemo(
        () =>
          conjureProjectMenuItems.previewMenuItems({
            canRefresh: null != refreshApplicationId,
            refreshPending: pending,
            offers: memo,
            connectPending: pending2,
          }),
        items3,
      );
      const items4 = [connect, stateFromStores, refresh];
      const onPress = refresh.useCallback((kind) => {
        if ("refresh" !== kind.kind) {
          const found = stateFromStores.find((type) => type.type === kind.connectionType);
          if (null != found) {
            if (found.configured) {
              connect(found);
            } else {
              const intl = util.intl;
              ToastUtils.presentError(intl.string(_modDef3849["jCQ/1B"]));
            }
          }
        } else {
          refresh();
        }
      }, items4);
      const items5 = [memo1, onPress];
      return refresh.useMemo(() => ({ items: memo1, onPress }), items5);
    };
