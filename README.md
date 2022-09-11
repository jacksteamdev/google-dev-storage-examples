# Storage Usage Examples

## Session Storage

Session storage is an in-memory Chrome Storage Area. The values in session storage exist only in memory, they are never written to disk. When the Chrome extension starts a new session, the values in session storage get reset.

A new session starts when the browser restarts, when the extension is updated, and when the user disables and enables the extension.

Session storage is marginally faster than local storage, but has limited capacity. It can only hold 1MB of data. If speed or capacity is a concern, consider using IndexedDB.

Unlike other storage areas, session storage is not available to content scripts by default.
