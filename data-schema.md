# 📦 데이터 구조 정의

## 🧍 User
```json
{
  "id": "user_123",
  "email": "jingu@example.com",
  "username": "진구",
  "passwordHash": "...",
  "createdAt": "2025-06-29T09:00:00Z",
  "diaryIds": ["diary_001", "diary_002"]
}

## Diary
{
  "id": "diary_001",
  "title": "제주도 여행기",
  "owner": "user_123",
  "createdAt": "2025-06-29T10:00:00Z",
  "isPublic": false,
  "pages": [ { ... } ]
}

## Page
{
  "pageNumber": 1,
  "elements": [ { ... } ]
}

## Elements
- type: image
{
  "type": "image",
  "src": "...",
  "x": 100,
  "y": 200,
  "width": 300,
  "height": 200,
  "rotation": 15,
  "zIndex": 1
}

- type: "text"
{
  "type": "text",
  "content": "여행기록!",
  "fontSize": 24,
  "fontFamily": "Arial",
  "fontWeight": "bold",
  "color": "#000000",
  "x": 120,
  "y": 250,
  "rotation": 0,
  "zIndex": 2
}
