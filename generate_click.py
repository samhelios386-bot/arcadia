
import wave
import math
import struct
import os

# Create directory if not exists
os.makedirs('public/pilgrimage/audio', exist_ok=True)

# Audio parameters
sample_rate = 44100
duration = 0.05 # 50ms click
num_samples = int(duration * sample_rate)
frequency = 1000 # 1kHz click

# Open wave file
with wave.open('public/pilgrimage/audio/click.wav', 'w') as wav_file:
    wav_file.setnchannels(1) # Mono
    wav_file.setsampwidth(2) # 16-bit
    wav_file.setframerate(sample_rate)

    # Generate samples
    for i in range(num_samples):
        t = i / sample_rate
        # Simple sine wave with rapid decay envelope to sound like a click/blip
        envelope = math.exp(-t * 100)
        value = int(32767.0 * envelope * math.sin(2 * math.pi * frequency * t))
        data = struct.pack('<h', value)
        wav_file.writeframes(data)

print("Generated public/pilgrimage/audio/click.wav")
