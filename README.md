# TeamUp Backend

TeamUp is a versatile multi-user kanban task manager designed to facilitate seamless team collaboration and productivity enhancement. This repository contains the backend code for TeamUp, built using Kotlin and Node.js, which supports customizable workspaces, dynamic kanban boards, and real-time team collaboration.

## Key Features

1. **User Authentication**
    - Secure user registration and login system.
    - Each user has personalized access to their workspaces, boards, and tasks.

2. **Customizable Workspaces**
    - Users can create, edit, and delete workspaces. Each workspace is customizable and can contain multiple kanban boards for organizing tasks by project or team.

3. **Dynamic Kanban Boards**
    - Boards are created within workspaces and allow users to visually manage tasks using cards and lists. Cards can be moved across lists or even between different boards.

4. **Card and List Management**
    - Users can add, edit, and move cards across lists in kanban boards.
    - Cards support customizable features such as labels, tags, due dates, and the ability to assign members.

5. **Multi-User Collaboration**
    - TeamUp allows real-time collaboration where multiple users can work in a workspace together, track tasks, assign members, and leave comments.

6. **PostgreSQL with Prisma ORM**
    - Utilizes PostgreSQL for database management and Prisma ORM for seamless database interaction, ensuring efficient data handling and scalability.

7. **Caching (Frontend)**
    - The frontend application integrates caching mechanisms for optimized data retrieval and improved performance.

## Technologies Used

- **Kotlin & Node.js**: Core technologies for building the backend infrastructure, focusing on scalability and efficiency.
- **PostgreSQL**: A reliable relational database for storing user and task data.
- **Prisma ORM**: Used to handle database modeling and interactions, providing a simplified interface for managing PostgreSQL data.
- **JWT (JSON Web Tokens)**: For managing user sessions and authentication.

## API Endpoints

### Authentication Endpoints:
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Log in an existing user.

### Board Management Endpoints:
- `PUT /api/board/:id` - Update an existing kanban board.

### Card Management Endpoints:
- `POST /api/card` - Create a new card within a board.
- `POST /api/card/user` - Add a user to a card.
- `DELETE /api/card/:id` - Delete a card.
- `PUT /api/card/position/:id` - Change the position of a card within a board.
- `PUT /api/card/move/:id` - Move a card to a different board.

### User Management Endpoints:
- `PUT /api/user/:id` - Update user information.
- `POST /api/user/search` - Search for users by criteria.

### Workspace Management Endpoints:
- `POST /api/workspace` - Create a new workspace.
- `GET /api/workspace` - Retrieve all workspaces.
- `GET /api/workspace/:id` - Retrieve details of a specific workspace.
- `PUT /api/workspace/:id` - Edit an existing workspace.
- `DELETE /api/workspace/:id` - Remove a workspace.
- `POST /api/workspace/user` - Add a user to a workspace.
