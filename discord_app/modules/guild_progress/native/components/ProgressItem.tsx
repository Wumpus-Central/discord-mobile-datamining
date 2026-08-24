// discord_app/modules/guild_progress/native/components/ProgressItem.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { formCTAContainer: { marginBottom: 8 }, formCTA: null, formCTAFullWidth: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: "100%" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(onPress) {
  onPress = onPress.onPress;
  const isCompleted = onPress.isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  const tmp = callback();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  let obj = { style: tmp.formCTAContainer, children: null };
  callback = analyticsAction.useCallback(() => {
    let tmp2 = null != analyticsAction;
    if (tmp2) {
      tmp2 = null != analyticsSetupType;
    }
    if (tmp2) {
      let obj = isCompleted(analyticsSetupType[6]);
      obj = { setup_type: null, action: null, action_completed: null };
      obj[0] = analyticsSetupType;
      obj[1] = analyticsAction;
      obj[2] = isCompleted;
      obj.trackWithMetadata(closure_1_5.SERVER_SETUP_CTA_CLICKED, obj);
    }
    onPress();
  }, items);
  const items1 = [tmp.formCTA, ];
  let formCTAFullWidth;
  if (fullWidth) {
    formCTAFullWidth = tmp.formCTAFullWidth;
  }
  obj = { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: null };
  items1[1] = formCTAFullWidth;
  let renderEndComponentResult;
  if (renderEndComponent != null) {
    renderEndComponentResult = renderEndComponent();
  }
  if (renderEndComponentResult == null) {
    renderEndComponentResult = null;
  }
  obj[8] = renderEndComponentResult;
  obj[1] = jsx(onPress(analyticsSetupType[7]).FormCTA, { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: null });
  return <View variant="row-button" style={items1} onPress={callback} iconSource={source} iconStyle={iconStyle} title={title} subtitle={description} completed={isCompleted} trailing={null} />;
};