// discord_app/modules/conjure/preview/native/useConjurePreviewMenu.tsx
import intl2 from "../../../../intl/index.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import conjureExternalConnections from "../../external_connections/conjureExternalConnections.tsx";
import conjureProjectMenuItems from "../../projects/conjureProjectMenuItems.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let presentErrorResult, projectId, tmp12, tmp3, tmp5, tmp6, tmp7;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let connect;
      let first;
      let pending;
      let pending2;
      let refresh;
      let tmp11;
      let tmp8;
      let tmp9;
      const obj = projectId(connect[3]);
      const cResult = obj.c(18);
      projectId = projectId.projectId;
      const refreshApplicationId = projectId.refreshApplicationId;
      const tmp4 = refresh(connect[4])(refreshApplicationId);
      ({ pending, refresh } = tmp4);
      const obj2 = projectId(connect[5]);
      const conjureConnectActions = obj2.useConjureConnectActions(projectId, projectId(connect[6]).presentError);
      ({ pending: pending2, connect } = conjureConnectActions);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureConnectionStore];
        cResult[0] = items;
        first = items;
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = projectId(connect[7]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] !== stateFromStores) {
        const tmpResult3 = projectId(connect[8]);
        const result = tmpResult3.externalConnectionOffers(stateFromStores);
        cResult[4] = stateFromStores;
        cResult[5] = result;
        tmp11 = result;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === pending2) {
        if (cResult[7] === tmp11) {
          if (cResult[8] === pending) {
            let tmp14;
            if ((cResult[9] === null) != refreshApplicationId) {
              tmp14 = cResult[10];
            }
            if (cResult[11] === connect) {
              if (cResult[12] === stateFromStores) {
                let tmp16;
                if (cResult[13] === refresh) {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === tmp14) {
                  let tmp17;
                  if (cResult[16] === tmp16) {
                    tmp17 = cResult[17];
                  }
                  return tmp17;
                }
                class S {
                  constructor(arg0) {
                    closure_0 = projectId;
                    if ("refresh" !== projectId.kind) {
                      tmp3 = closure_3;
                      found = closure_3.find((type) => type.type === connectionType.connectionType);
                      tmp5 = null;
                      if (null != found) {
                        if (found.configured) {
                          tmp11 = connect;
                          tmp12 = connect(found);
                        } else {
                          tmp6 = closure_0;
                          tmp7 = closure_2;
                          tmp8 = closure_0(closure_2[6]);
                          presentError = tmp8.presentError;
                          intl = closure_0(closure_2[10]).intl;
                          tmp9 = closure_1;
                          presentErrorResult = presentError(intl.string(closure_1(closure_2[11])["jCQ/1B"]));
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
            class S {
              constructor(arg0) {
                closure_0 = projectId;
                if ("refresh" !== projectId.kind) {
                  tmp3 = closure_3;
                  found = closure_3.find((type) => type.type === connectionType.connectionType);
                  tmp5 = null;
                  if (null != found) {
                    if (found.configured) {
                      tmp11 = connect;
                      tmp12 = connect(found);
                    } else {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      tmp8 = closure_0(closure_2[6]);
                      presentError = tmp8.presentError;
                      intl = closure_0(closure_2[10]).intl;
                      tmp9 = closure_1;
                      presentErrorResult = presentError(intl.string(closure_1(closure_2[11])["jCQ/1B"]));
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
            cResult[14] = S;
            tmp16 = S;
          }
        }
      }
      const tmpResult4 = projectId(connect[9]);
      const previewMenuItemsResult = tmpResult4.previewMenuItems({
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
    }
  : (projectId) => {
      projectId = projectId.projectId;
      const refreshApplicationId = projectId.refreshApplicationId;
      let pending;
      const tmp = refreshApplicationId(pending[4])(refreshApplicationId);
      pending = tmp.pending;
      const refresh = tmp.refresh;
      let obj = projectId(pending[5]);
      const conjureConnectActions = obj.useConjureConnectActions(projectId, projectId(pending[6]).presentError);
      const pending2 = conjureConnectActions.pending;
      const connect = conjureConnectActions.connect;
      let obj2 = projectId(pending[7]);
      const items = [pending2];
      const items1 = [projectId];
      const stateFromStores = obj2.useStateFromStores(
        items,
        () => ConjureConnectionStore.getDeclaredConnections(projectId),
        items1,
      );
      const items2 = [stateFromStores];
      const memo = refresh.useMemo(() => {
        const obj = conjureExternalConnections;
        return obj.externalConnectionOffers(stateFromStores);
      }, items2);
      const items3 = [pending2, memo, refreshApplicationId, pending];
      const memo1 = refresh.useMemo(() => {
        const obj = conjureProjectMenuItems;
        const obj2 = {
          canRefresh: null != refreshApplicationId,
          refreshPending: pending,
          offers: memo,
          connectPending: pending2,
        };
        return obj.previewMenuItems(obj2);
      }, items3);
      const items4 = [connect, stateFromStores, refresh];
      const onPress = refresh.useCallback((kind) => {
        let closure_0 = kind;
        if ("refresh" !== kind.kind) {
          const found = stateFromStores.find((type) => type.type === connectionType.connectionType);
          if (null != found) {
            if (found.configured) {
              connect(found);
            } else {
              const presentError = ToastUtils.presentError;
              ToastUtils;
              const intl = intl2.intl;
              presentError(intl.string(_modDef3723["jCQ/1B"]));
            }
          }
        } else {
          refresh();
        }
      }, items4);
      const items5 = [memo1, onPress];
      return refresh.useMemo(() => ({ items: memo1, onPress }), items5);
    };
let result = size.fileFinishedImporting("modules/conjure/preview/native/useConjurePreviewMenu.tsx");

export default tmp2;
