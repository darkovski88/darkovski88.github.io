# Web Content Export

This folder mirrors `content-source/files`.

Upload the contents of this folder while preserving the directory structure:

- `content/traffic-signs/countries/*.json`
- `content/traffic-signs/theory/*.json`
- `content/traffic-signs/images/**`
- `featured/**`
- `health.txt`

When the files are hosted, set `HostedContentConfig.filesBaseUrl` in:

- `composeApp/src/commonMain/kotlin/com/learn/driving/app/data/HostedContentConfig.kt`

The base URL must point to the root that contains `content/` and `featured/`.

Example:

- `https://cdn.example.com/learndriving`

Then the app will request:

- `https://cdn.example.com/learndriving/content/traffic-signs/countries/north_macedonia.json`
- `https://cdn.example.com/learndriving/content/traffic-signs/images/mk/MK_road_sign_101.png`
- `https://cdn.example.com/learndriving/featured/driving_school_topic.jpg`

The app now expects hosted content only. If these files or `health.txt` are missing from the server, the app will show the offline screen until the hosted content becomes reachable again.
