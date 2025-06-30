 🔌 API 명세서 v1 – 여행기 다이어리 프로젝트

## 🧍 사용자 API

### POST /api/auth/register
- **설명**: 회원가입
- **요청 헤더**
  - Content-Type: application/json
- **요청 바디**
```json
{
  "email": "jingu@example.com",
  "username": "진구",
  "password": "pw123"
}
```
- **응답 (201 Created)**
```json
{
  "id": "user_123",
  "email": "jingu@example.com",
  "username": "진구",
  "createdAt": "2025-06-29T09:00:00Z"
}
```
- **오류 응답 (400 Bad Request)**
```json
{ "error": "Email already in use" }
```

---

### POST /api/auth/login
- **설명**: 로그인 및 JWT 토큰 발급
- **요청 바디**
```json
{
  "email": "jingu@example.com",
  "password": "pw123"
}
```
- **응답 (200 OK)**
```json
{
  "token": "JWT_token_here",
  "user": {
    "id": "user_123",
    "username": "진구",
    "email": "jingu@example.com"
  }
}
```
- **오류 응답 (401 Unauthorized)**
```json
{ "error": "Invalid credentials" }
```

---

### GET /api/users/me
- **설명**: 내 정보 조회
- **요청 헤더**
  - Authorization: Bearer <token>
- **응답 (200 OK)**
```json
{
  "id": "user_123",
  "email": "jingu@example.com",
  "username": "진구",
  "createdAt": "2025-06-29T09:00:00Z",
  "diaryIds": ["diary_001", "diary_002"]
}
```

---

## 📓 다이어리 API

### POST /api/diaries
- **설명**: 다이어리 생성
- **요청 헤더**
  - Authorization: Bearer <token>
- **요청 바디**
```json
{
  "title": "제주도 여행기",
  "isPublic": false
}
```
- **응답 (201 Created)**
```json
{
  "id": "diary_001",
  "title": "제주도 여행기",
  "owner": "user_123",
  "createdAt": "2025-06-29T10:00:00Z",
  "pages": [],
  "isPublic": false
}
```

---

### GET /api/diaries/:id
- **설명**: 특정 다이어리 상세 조회
- **요청 헤더**
  - Authorization: Bearer <token>
- **응답 (200 OK)**
```json
{
  "id": "diary_001",
  "title": "제주도 여행기",
  "owner": "user_123",
  "createdAt": "2025-06-29T10:00:00Z",
  "isPublic": false,
  "pages": [
    {
      "pageNumber": 1,
      "elements": [
        {
          "type": "image",
          "src": "https://cdn.../image1.jpg",
          "x": 100,
          "y": 200,
          "width": 300,
          "height": 200,
          "rotation": 15,
          "zIndex": 1
        },
        {
          "type": "text",
          "content": "우도에서 땅콩아이스크림!",
          "fontSize": 24,
          "fontFamily": "Arial",
          "fontWeight": "bold",
          "color": "#333333",
          "x": 120,
          "y": 450,
          "rotation": 0,
          "zIndex": 2
        }
      ]
    }
  ]
}
```

---

### PUT /api/diaries/:id
- **설명**: 다이어리 저장/업데이트
- **요청 헤더**
  - Authorization: Bearer <token>
- **요청 바디**
```json
{
  "title": "제주도 여행기",
  "isPublic": false,
  "pages": [ ... ]
}
```
- **응답 (200 OK)**
```json
{ "success": true }
```

---

### GET /api/diaries/my
- **설명**: 내가 작성한 다이어리 목록 조회
- **요청 헤더**
  - Authorization: Bearer <token>
- **응답**
```json
[
  {
    "id": "diary_001",
    "title": "제주도 여행기",
    "createdAt": "2025-06-29T10:00:00Z",
    "isPublic": false
  },
  {
    "id": "diary_002",
    "title": "강릉 힐링 여행",
    "createdAt": "2025-05-10T08:00:00Z",
    "isPublic": true
  }
]
```

---

### POST /api/uploads/image
- **설명**: 이미지 업로드
- **요청 헤더**
  - Authorization: Bearer <token>
- **요청 (multipart/form-data)**
  - file: 이미지 파일
- **응답**
```json
{
  "url": "https://cdn.example.com/image.jpg"
}
```
