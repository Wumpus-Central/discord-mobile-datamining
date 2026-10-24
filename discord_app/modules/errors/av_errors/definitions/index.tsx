// === Module 19383: ErrorDefinitions ===

// Module 19383 (ErrorDefinitions)
import AVError from "AVError" /* 5897 */;
import AVErrorNoAudioInputDetected from "AVErrorNoAudioInputDetected" /* 19384 */;
import AVErrorNoInputDevices from "AVErrorNoInputDevices" /* 19386 */;
import AVErrorStreamViewLowFPS from "AVErrorStreamViewLowFPS" /* 19387 */;
import AVErrorStreamViewHighPacketLoss from "AVErrorStreamViewHighPacketLoss" /* 19389 */;
import AVErrorStreamSendHighPacketLoss from "AVErrorStreamSendHighPacketLoss" /* 19390 */;
import AVErrorStreamSendLowFPS from "AVErrorStreamSendLowFPS" /* 19391 */;
import AVErrorStreamBadNetworkQuality from "AVErrorStreamBadNetworkQuality" /* 19392 */;
import AVErrorStreamSoundshareFailed from "AVErrorStreamSoundshareFailed" /* 19393 */;
import AVErrorStreamFailedToStart from "AVErrorStreamFailedToStart" /* 19394 */;
import AVErrorStreamReconnecting from "AVErrorStreamReconnecting" /* 19395 */;
import AVErrorScreenshareOSError from "AVErrorScreenshareOSError" /* 19396 */;
import AVErrorAudioCaptureSampleRateMismatch from "AVErrorAudioCaptureSampleRateMismatch" /* 19397 */;
import AVErrorVideoStreamSenderReadyTimeout from "AVErrorVideoStreamSenderReadyTimeout" /* 19398 */;
import AVErrorVideoStreamReceiverReadyTimeout from "AVErrorVideoStreamReceiverReadyTimeout" /* 19399 */;
import AVErrorVideoStreamSenderReadyTimeoutNoStream from "AVErrorVideoStreamSenderReadyTimeoutNoStream" /* 19400 */;
import AVErrorVideoStreamReceiverReadyTimeoutNoStream from "AVErrorVideoStreamReceiverReadyTimeoutNoStream" /* 19401 */;
import AVErrorCameraSendLowFPS from "AVErrorCameraSendLowFPS" /* 19402 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[AVError.AVError.NO_AUDIO_INPUT_DETECTED] = AVErrorNoAudioInputDetected.AVErrorNoAudioInputDetectedDefinition;
obj[AVError.AVError.NO_INPUT_DEVICES] = AVErrorNoInputDevices.AVErrorNoInputDevicesDefinition;
obj[AVError.AVError.STREAM_VIEW_LOW_FPS] = AVErrorStreamViewLowFPS.AVErrorStreamViewLowFPSDefinition;
obj[AVError.AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = AVErrorStreamViewHighPacketLoss.AVErrorStreamViewHighPacketLossDefinition;
obj[AVError.AVError.STREAM_SEND_HIGH_PACKET_LOSS] = AVErrorStreamSendHighPacketLoss.AVErrorStreamSendHighPacketLossDefinition;
obj[AVError.AVError.STREAM_SEND_LOW_FPS] = AVErrorStreamSendLowFPS.AVErrorStreamSendLowFPSDefinition;
obj[AVError.AVError.STREAM_BAD_NETWORK_QUALITY] = AVErrorStreamBadNetworkQuality.AVErrorStreamBadNetworkQualityDefinition;
obj[AVError.AVError.STREAM_SOUNDSHARE_FAILED] = AVErrorStreamSoundshareFailed.AVErrorStreamSoundshareFailedDefinition;
obj[AVError.AVError.STREAM_FAILED_TO_START] = AVErrorStreamFailedToStart.AVErrorStreamFailedToStartDefinition;
obj[AVError.AVError.STREAM_RECONNECTING] = AVErrorStreamReconnecting.AVErrorStreamReconnectingDefinition;
obj[AVError.AVError.SCREENSHARE_OS_ERROR] = AVErrorScreenshareOSError.AVErrorScreenshareOSErrorDefinition;
obj[AVError.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = AVErrorAudioCaptureSampleRateMismatch.AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = AVErrorVideoStreamSenderReadyTimeout.AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = AVErrorVideoStreamReceiverReadyTimeout.AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamSenderReadyTimeoutNoStream.AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamReceiverReadyTimeoutNoStream.AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[AVError.AVError.CAMERA_SEND_LOW_FPS] = AVErrorCameraSendLowFPS.AVErrorCameraSendLowFPSDefinition;
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;