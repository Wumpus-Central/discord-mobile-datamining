// discord_app/modules/app_launcher/native/base_components/PlaceholderAppRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import usePlaceholderSize from "../hooks/usePlaceholderSize.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { loadingAppIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.loadingAppIcon = size;
obj2.loadingTextPlaceholder = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  marginBottom: 4,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
obj2.loadingTextPlaceholderSmall = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PlaceholderAppRow(arg0) {
      const cResult = c.c(19);
      ({ isFirstRow, isLastRow } = arg0);
      const tmp6 = closure_4();
      const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
      const tmpResult = usePlaceholderSize;
      const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
      if (cResult[0] !== tmp6.loadingAppIcon) {
        const obj2 = { style: tmp6.loadingAppIcon };
        const tmp12 = <View style={tmp6.loadingAppIcon} />;
        cResult[0] = tmp6.loadingAppIcon;
        cResult[1] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[1];
      }
      const combined = "" + placeholderWidth + "%";
      if (cResult[2] !== combined) {
        const obj3 = { width: combined };
        cResult[2] = combined;
        cResult[3] = obj3;
        let tmp14 = obj3;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === tmp6.loadingTextPlaceholder) {
        if (cResult[5] === tmp14) {
          let tmp15 = cResult[6];
        }
        const _HermesInternal = HermesInternal;
        const combined1 = "" + placeholderWidth1 + "%";
        if (cResult[7] !== combined1) {
          const obj4 = { width: combined1 };
          cResult[7] = combined1;
          cResult[8] = obj4;
          let tmp18 = obj4;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] === tmp6.loadingTextPlaceholderSmall) {
          if (cResult[10] === tmp18) {
            let tmp19 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                return;
              }
            }
            cResult[12] = A;
          } else {
            class A {
              constructor() {
                return;
              }
            }
          }
          if (cResult[13] === tmp4) {
            class A {
              constructor() {
                return;
              }
            }
          }
          const obj5 = {
            icon: tmp9,
            label: tmp15,
            subLabel: tmp19,
            subLabelLineClamp: 1,
            start: tmp4,
            end: tmp5,
            onPress: A,
          };
          const tmp26 = jsx(TableRow.TableRow, {
            icon: tmp9,
            label: tmp15,
            subLabel: tmp19,
            subLabelLineClamp: 1,
            start: tmp4,
            end: tmp5,
            onPress: A,
          });
          cResult[13] = tmp4;
          cResult[14] = tmp5;
          cResult[15] = tmp9;
          cResult[16] = tmp15;
          cResult[17] = tmp19;
          cResult[18] = tmp26;
        }
        const obj6 = { style: null };
        const items = [tmp6.loadingTextPlaceholderSmall, tmp18];
        obj6.style = items;
        const tmp22 = <View style={null} />;
        cResult[9] = tmp6.loadingTextPlaceholderSmall;
        cResult[10] = tmp18;
        cResult[11] = tmp22;
        tmp19 = tmp22;
      }
      const obj7 = { style: null };
      const items1 = [tmp6.loadingTextPlaceholder, tmp14];
      obj7.style = items1;
      const tmp16 = <View style={null} />;
      cResult[4] = tmp6.loadingTextPlaceholder;
      cResult[5] = tmp14;
      cResult[6] = tmp16;
      tmp15 = tmp16;
      const tmpResult2 = usePlaceholderSize;
    }
  : function PlaceholderAppRow(isFirstRow) {
      let flag = isFirstRow.isFirstRow;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = isFirstRow.isLastRow;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const tmp = closure_4();
      const placeholderWidth = usePlaceholderSize.usePlaceholderWidth(10, 50);
      const placeholderWidth1 = usePlaceholderSize.usePlaceholderWidth(30, 90);
      const obj3 = {
        icon: <View style={tmp.loadingAppIcon} />,
        label: null,
        subLabel: null,
        subLabelLineClamp: 1,
        start: null,
        end: null,
        onPress: null,
      };
      const obj5 = { style: null };
      const items = [tmp.loadingTextPlaceholder];
      const obj4 = { style: tmp.loadingAppIcon };
      items[1] = { width: "" + placeholderWidth + "%" };
      obj5.style = items;
      obj3.label = <View style={null} />;
      const obj7 = { style: null };
      const items1 = [tmp.loadingTextPlaceholderSmall];
      const obj6 = { width: "" + placeholderWidth + "%" };
      items1[1] = { width: "" + placeholderWidth1 + "%" };
      obj7.style = items1;
      obj3.subLabel = <View style={null} />;
      obj3.start = flag;
      obj3.end = flag2;
      obj3.onPress = function onPress() {};
      return jsx(TableRow.TableRow, {
        icon: <View style={tmp.loadingAppIcon} />,
        label: null,
        subLabel: null,
        subLabelLineClamp: 1,
        start: null,
        end: null,
        onPress: null,
      });
    };
