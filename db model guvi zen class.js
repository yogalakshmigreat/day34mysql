CREATE TABLE Courses (
    CourseID INT PRIMARY KEY AUTO_INCREMENT,
    CourseName VARCHAR(255) NOT NULL,
    Description TEXT
);

CREATE TABLE Classes (
    ClassID INT PRIMARY KEY AUTO_INCREMENT,
    CourseID INT,
    ClassName VARCHAR(255) NOT NULL,
    ClassDescription TEXT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

CREATE TABLE Sessions (
    SessionID INT PRIMARY KEY AUTO_INCREMENT,
    ClassID INT,
    SessionName VARCHAR(255) NOT NULL,
    SessionDate DATE,
    SessionTime TIME,
    Location VARCHAR(255),
    FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
);

CREATE TABLE Feedback (
    FeedbackID INT PRIMARY KEY AUTO_INCREMENT,
    SessionID INT,
    StudentID INT,
    FeedbackText TEXT,
    Rating INT,
    FOREIGN KEY (SessionID) REFERENCES Sessions(SessionID),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

CREATE TABLE Tasks (
    TaskID INT PRIMARY KEY AUTO_INCREMENT,
    SessionID INT,
    TaskName VARCHAR(255) NOT NULL,
    TaskDescription TEXT,
    Deadline DATE,
    FOREIGN KEY (SessionID) REFERENCES Sessions(SessionID)
);

CREATE TABLE Activities (
    ActivityID INT PRIMARY KEY AUTO_INCREMENT,
    SessionID INT,
    ActivityName VARCHAR(255) NOT NULL,
    ActivityDescription TEXT,
    FOREIGN KEY (SessionID) REFERENCES Sessions(SessionID)
);

CREATE TABLE Mentors (
    MentorID INT PRIMARY KEY AUTO_INCREMENT,
    MentorName VARCHAR(255) NOT NULL,
    CourseID INT,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

CREATE TABLE Students (
    StudentID INT PRIMARY KEY AUTO_INCREMENT,
    StudentName VARCHAR(255) NOT NULL,
    CourseID INT,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

CREATE TABLE Content (
    ContentID INT PRIMARY KEY AUTO_INCREMENT,
    SessionID INT,
    ContentType ENUM('Text', 'Video', 'Presentation', 'File'),
    ContentDetails TEXT,
    FOREIGN KEY (SessionID) REFERENCES Sessions(SessionID)
);

CREATE TABLE VideoRecordings (
    RecordingID INT PRIMARY KEY AUTO_INCREMENT,
    SessionID INT,
    RecordingURL VARCHAR(255) NOT NULL,
    RecordingDuration TIME,
    FOREIGN KEY (SessionID) REFERENCES Sessions(SessionID)
);
