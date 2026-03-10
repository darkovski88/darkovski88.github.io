# Encrypted Web Content Export

This folder contains encrypted copies of:

- `content/traffic-signs/countries/*.json`
- `content/traffic-signs/theory/*.json`
- `content/traffic-signs/images/**`
- `featured/**`
- `health.txt`

Upload this folder while preserving the directory structure.

The app decrypts these files using the configured content key seed from:

- `/Users/darko.petkovski/AndroidStudioProjects/learndrivingapp/composeApp/src/commonMain/kotlin/com/learn/driving/app/data/ContentProtectionConfig.kt`

Current canonical key seed:

- ``

The hosted base URL must point to the folder root that contains `content/` and `featured/`.

After you upload it, set `HostedContentConfig.filesBaseUrl` and the app will request encrypted files from there.

The app now expects hosted content only. If these files or `health.txt` are missing from the server, the app will show the offline screen until the hosted content becomes reachable again.

Security note: this is obfuscation-grade protection. A package or bundle identifier is public metadata, not a secret.
