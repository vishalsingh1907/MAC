# Firestore Database Structure

## Collection: events
```
events/
  └── azure-ai (document)
      ├── title: "Azure AI & Machine Learning Workshop"
      ├── tag: "Workshop"
      ├── date: "April 12, 2025"
      ├── loc: "CoE Lab, Block D"
      ├── seats: 40
      ├── seatsFilled: 5
      ├── duration: "6 hours (10 AM – 4 PM)"
      ├── description: "This hands-on workshop..."
      ├── learnings: ["Intro to Azure", "Building models", "REST API"]
      ├── audience: "Open to all students..."
      └── prerequisites: "A laptop and curiosity"

  └── hackathon (document)
      └── ... (similar structure)
```

## Collection: registrations
```
registrations/
  └── user_registration_123 (document)
      ├── userId: "user123" (auto-generated)
      ├── eventId: "azure-ai"
      ├── firstName: "John"
      ├── lastName: "Doe"
      ├── email: "john@example.com"
      ├── department: "Computer Science"
      ├── phone: "9876543210"
      ├── registrationDate: (Firestore timestamp)
      └── status: "confirmed"
```

## Security Rules (Test Mode - Can Update Later)
For now, test mode allows read/write to everyone. For production, add authenticated users.
