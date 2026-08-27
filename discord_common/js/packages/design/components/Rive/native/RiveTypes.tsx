// === Module 4232: FIT_MAP ===

// Module 4232 (FIT_MAP)
import set from "set" /* 2 */;
import DataBindByName from "DataBindByName" /* 4180 */;

let obj = { fill: DataBindByName.Fit.Fill, contain: DataBindByName.Fit.Contain, cover: DataBindByName.Fit.Cover, "fit-width": DataBindByName.Fit.FitWidth, "fit-height": DataBindByName.Fit.FitHeight, none: DataBindByName.Fit.None, "scale-down": DataBindByName.Fit.ScaleDown, layout: DataBindByName.Fit.Layout };
obj = { "top-left": DataBindByName.Alignment.TopLeft, "top-center": DataBindByName.Alignment.TopCenter, "top-right": DataBindByName.Alignment.TopRight, "center-left": DataBindByName.Alignment.CenterLeft, center: DataBindByName.Alignment.Center, "center-right": DataBindByName.Alignment.CenterRight, "bottom-left": DataBindByName.Alignment.BottomLeft, "bottom-center": DataBindByName.Alignment.BottomCenter, "bottom-right": DataBindByName.Alignment.BottomRight };
const result = set.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/RiveTypes.tsx");

export const FIT_MAP = obj;
export const ALIGNMENT_MAP = obj;