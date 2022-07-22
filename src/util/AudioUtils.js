export const LoadAudio = async (file) => {
  const arrayBuffer = await file.arrayBuffer();

  const audioCtx = new AudioContext();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  const rawData = audioBuffer.getChannelData(0);

  const sr = audioBuffer.sampleRate;
  const duration = audioBuffer.duration;

  return [rawData, sr, duration];
};

export const DataNormalize = async (data) => {
  const peak = Max(data);
  const fall = Min(data);

  return data.map((num) => (num - fall) / (peak - fall));
};

export const Max = (values) => {
  let largest = -Infinity;

  values.forEach((value) => {
    if (value > largest) {
      largest = value;
    }
  });

  return largest;
};

export const Min = (values) => {
  let smallest = Number(Infinity);
  values.forEach((value) => {
    if (value < smallest) {
      smallest = value;
    }
  });
  return smallest;
};
