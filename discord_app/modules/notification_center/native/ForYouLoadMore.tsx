// discord_app/modules/notification_center/native/ForYouLoadMore.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import NotificationCenterItemsStore from "../NotificationCenterItemsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 24,
    marginHorizontal: 16,
    height: 42,
  },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPressLoad) => {
      const cResult = c.c(8);
      onPressLoad = onPressLoad.onPressLoad;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [NotificationCenterItemsStore];
        const fn = function f() {
          return loading.loading;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === onPressLoad) {
          if (cResult[5] === tmp4.container) {
            if (cResult[6] === tmp9) {
              let tmp13 = cResult[7];
            }
            return tmp13;
          }
          const obj2 = { style: tmp4.container, children: cResult[4] };
          const tmp16 = <React3 style={tmp4.container}>{cResult[4]}</React3>;
          cResult[5] = tmp4.container;
          cResult[6] = cResult[4];
          cResult[7] = tmp16;
          tmp13 = tmp16;
        }
      }
      if (stateFromStores) {
        let tmp10Result = <React2 />;
      } else {
        const obj3 = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t["Q/LSXp"]);
        obj3.onPress = onPressLoad;
        tmp10Result = jsx(components_Button_Button.Button, {
          variant: "secondary",
          grow: true,
          size: "md",
          text: null,
          onPress: null,
        });
      }
      cResult[2] = stateFromStores;
      cResult[3] = onPressLoad;
      cResult[4] = tmp10Result;
      const tmpResult = useStateFromStores;
    }
  : (onPressLoad) => {
      const tmp = closure_6();
      const items = [NotificationCenterItemsStore];
      const obj2 = { style: tmp.container, children: null };
      if (obj.useStateFromStores(items, () => loading.loading)) {
        let tmp4Result = <React2 />;
      } else {
        const obj3 = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t["Q/LSXp"]);
        obj3.onPress = onPressLoad.onPressLoad;
        tmp4Result = jsx(components_Button_Button.Button, {
          variant: "secondary",
          grow: true,
          size: "md",
          text: null,
          onPress: null,
        });
      }
      obj2.children = tmp4Result;
      return <React3 style={tmp.container}>{null}</React3>;
    };
