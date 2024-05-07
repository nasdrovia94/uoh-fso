```mermaid
sequenceDiagram
    participant browser
    participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa
    activate server

    server-->>browser: JSON: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    