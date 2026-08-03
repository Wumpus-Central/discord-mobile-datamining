import noop from "noop";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { formCTAContainer: { marginBottom: 8 }, formCTA: null, formCTAFullWidth: null };
createCacheKey = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(onPress) {
  let description;
  let fullWidth;
  let iconStyle;
  let source;
  let title;
  onPress = onPress.onPress;
  const isCompleted = onPress.isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  const tmp = createCacheKey();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  let obj = { style: tmp.formCTAContainer, children: null };
  const callback = analyticsAction.useCallback(() => {
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
      obj.trackWithMetadata(outer1_5.SERVER_SETUP_CTA_CLICKED, obj);
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