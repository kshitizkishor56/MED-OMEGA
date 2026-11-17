# Backup and restore

Use Settings → Export Backup regularly. The versioned JSON backup contains screenshot image bytes (base64 encoded), question metadata, imported records, flashcard scheduling state, and review history. Keep it somewhere private. The site does not upload it.

To restore, open Settings → Restore backup and choose the exported JSON file. Restore validates its format/version and writes matching IDs over existing entries while keeping unrelated records. Verify restored screenshots and cards before deleting the backup. iOS browser storage may be cleared or evicted; export is your durable copy.
