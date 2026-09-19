// discord_app/modules/application_commands/native/ApplicationCommandLoadingItem.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AUTOCOMPLETE_ROW_HEIGHT = fn(10520).AUTOCOMPLETE_ROW_HEIGHT;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 16;
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = {
    applicationCommandLoadingItem: {
      flexDirection: "row",
      paddingVertical: 4,
      paddingHorizontal: 16,
      alignItems: "center",
      height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT),
    },
    applicationCommandLoadingLeftWrapper: {
      flexDirection: "column",
      width: "75%",
      height: "100%",
      justifyContent: "space-between",
    },
    applicationCommandLoadingName: null,
    applicationCommandLoadingDescription: null,
    applicationCommandLoadingSectionName: null,
  };
  const size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    height: v16,
    borderRadius: v16,
    width: "20%",
  };
  obj.applicationCommandLoadingName = size;
  const size1 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height: v16,
    borderRadius: v16,
    width: "80%",
  };
  obj.applicationCommandLoadingDescription = size1;
  const size2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingLeft: 16,
    width: "25%",
    marginLeft: "auto",
    height: v16,
    borderRadius: v16,
  };
  obj.applicationCommandLoadingSectionName = size2;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandLoadingItem.tsx");

export default function ApplicationCommandLoadingItem() {
  const tmp = closure_8(useFontScale.useFontScale());
  const obj2 = { style: tmp.applicationCommandLoadingItem, children: null };
  const obj3 = { style: tmp.applicationCommandLoadingLeftWrapper, children: null };
  const items = [
    hasOwnProperty(View, { style: tmp.applicationCommandLoadingName }),
    hasOwnProperty(View, { style: tmp.applicationCommandLoadingDescription }),
  ];
  obj3.children = items;
  const items1 = [
    timestampProducer(View, obj3),
    hasOwnProperty(View, { style: tmp.applicationCommandLoadingSectionName }),
  ];
  obj2.children = items1;
  return timestampProducer(View, obj2);
}
