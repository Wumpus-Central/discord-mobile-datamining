// discord_app/modules/stage_channels/native/components/BlankAudienceTile.tsx
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import AudienceTile from "AudienceTile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default noop.memo(() => {
  let obj = AudienceTile;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container];
  obj = { width: AudienceTile.getTileWidthStyle(useWindowDimensionsDefault().width) };
  items[1] = obj;
  obj.style = items;
  return <View width={AudienceTile.getTileWidthStyle(useWindowDimensionsDefault().width)} />;
});
