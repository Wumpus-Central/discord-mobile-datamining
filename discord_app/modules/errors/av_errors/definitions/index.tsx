// === Module 20318: ErrorDefinitions ===

// Module 20318 (ErrorDefinitions)
import AVError from "AVError" /* 6035 */;
import AVErrorNoAudioInputDetected from "AVErrorNoAudioInputDetected" /* 20319 */;
import AVErrorNoInputDevices from "AVErrorNoInputDevices" /* 20321 */;
import AVErrorStreamViewLowFPS from "AVErrorStreamViewLowFPS" /* 20322 */;
import AVErrorStreamViewHighPacketLoss from "AVErrorStreamViewHighPacketLoss" /* 20324 */;
import AVErrorStreamSendHighPacketLoss from "AVErrorStreamSendHighPacketLoss" /* 20325 */;
import AVErrorStreamSendLowFPS from "AVErrorStreamSendLowFPS" /* 20326 */;
import AVErrorStreamBadNetworkQuality from "AVErrorStreamBadNetworkQuality" /* 20327 */;
import AVErrorStreamSoundshareFailed from "AVErrorStreamSoundshareFailed" /* 20328 */;
import AVErrorStreamFailedToStart from "AVErrorStreamFailedToStart" /* 20329 */;
import AVErrorStreamReconnecting from "AVErrorStreamReconnecting" /* 20330 */;
import AVErrorScreenshareOSError from "AVErrorScreenshareOSError" /* 20331 */;
import AVErrorAudioCaptureSampleRateMismatch from "AVErrorAudioCaptureSampleRateMismatch" /* 20332 */;
import AVErrorVideoStreamSenderReadyTimeout from "AVErrorVideoStreamSenderReadyTimeout" /* 20333 */;
import AVErrorVideoStreamReceiverReadyTimeout from "AVErrorVideoStreamReceiverReadyTimeout" /* 20334 */;
import AVErrorVideoStreamSenderReadyTimeoutNoStream from "AVErrorVideoStreamSenderReadyTimeoutNoStream" /* 20335 */;
import AVErrorVideoStreamReceiverReadyTimeoutNoStream from "AVErrorVideoStreamReceiverReadyTimeoutNoStream" /* 20336 */;
import AVErrorCameraSendLowFPS from "AVErrorCameraSendLowFPS" /* 20337 */;
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