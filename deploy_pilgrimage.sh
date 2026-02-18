#!/bin/bash
set -e
set -x

export NEXT_TELEMETRY_DISABLED=1

SOURCE_DIR="/Volumes/潮信文化交接盘02/Arcadia/the_pilgrimage"
DEST_DIR="/Volumes/潮信文化交接盘02/荒原学派官网/arcadia-main/public/pilgrimage"

echo "=== Starting Pilgrimage Deployment ==="
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: Source directory does not exist."
  exit 1
fi

cd "$SOURCE_DIR"

echo "--- Building project... ---"
npm run build

echo "--- Deploying artifacts... ---"
mkdir -p "$DEST_DIR"
cp -R out/* "$DEST_DIR/"

echo "=== Deployment Successful! ==="
