package com.robotota.backend.service;

import com.robotota.backend.entity.Robot;
import com.robotota.backend.repository.RobotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class RobotService {

    @Autowired
    private RobotRepository robotRepository;

    public List<Robot> getAllRobots() {
        return robotRepository.findAll();
    }

    public Optional<Robot> getRobotById(String id) {
        return robotRepository.findById(id);
    }

    public Robot updateRobotStatus(String id, String status) {
        Robot robot = robotRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Robot not found with id: " + id));
        robot.setStatus(status);
        robot.setLastSeen(LocalDateTime.now());
        return robotRepository.save(robot);
    }

    public Robot upgradeRobot(String id, String newVersion) {
        Robot robot = robotRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Robot not found with id: " + id));
        robot.setVersion(newVersion);
        robot.setStatus("updating");
        robot.setLastSeen(LocalDateTime.now());
        return robotRepository.save(robot);
    }

    // Initialize test data
    public void initializeTestData() {
        if (robotRepository.count() == 0) {
            Robot robot1 = new Robot();
            robot1.setId("RBT-1247");
            robot1.setName("Warehouse Bot Alpha");
            robot1.setModel("WB-500");
            robot1.setVersion("v2.4.1");
            robot1.setStatus("online");
            robot1.setLastSeen(LocalDateTime.now().minusMinutes(2));
            robot1.setLocation("Warehouse A");

            Robot robot2 = new Robot();
            robot2.setId("RBT-1246");
            robot2.setName("Warehouse Bot Beta");
            robot2.setModel("WB-500");
            robot2.setVersion("v2.4.1");
            robot2.setStatus("online");
            robot2.setLastSeen(LocalDateTime.now().minusMinutes(5));
            robot2.setLocation("Warehouse A");

            Robot robot3 = new Robot();
            robot3.setId("RBT-1245");
            robot3.setName("Delivery Bot 01");
            robot3.setModel("DB-200");
            robot3.setVersion("v2.4.0");
            robot3.setStatus("online");
            robot3.setLastSeen(LocalDateTime.now().minusMinutes(1));
            robot3.setLocation("Station 5");

            Robot robot4 = new Robot();
            robot4.setId("RBT-1244");
            robot4.setName("Cleaning Bot Charlie");
            robot4.setModel("CB-100");
            robot4.setVersion("v2.3.9");
            robot4.setStatus("updating");
            robot4.setLastSeen(LocalDateTime.now().minusMinutes(10));
            robot4.setLocation("Floor 2");

            Robot robot5 = new Robot();
            robot5.setId("RBT-1243");
            robot5.setName("Security Bot 03");
            robot5.setModel("SB-300");
            robot5.setVersion("v2.4.1");
            robot5.setStatus("online");
            robot5.setLastSeen(LocalDateTime.now().minusMinutes(3));
            robot5.setLocation("Entrance");

            Robot robot6 = new Robot();
            robot6.setId("RBT-1242");
            robot6.setName("Warehouse Bot Gamma");
            robot6.setModel("WB-500");
            robot6.setVersion("v2.4.1");
            robot6.setStatus("offline");
            robot6.setLastSeen(LocalDateTime.now().minusHours(2));
            robot6.setLocation("Warehouse B");

            Robot robot7 = new Robot();
            robot7.setId("RBT-1241");
            robot7.setName("Delivery Bot 02");
            robot7.setModel("DB-200");
            robot7.setVersion("v2.4.1");
            robot7.setStatus("online");
            robot7.setLastSeen(LocalDateTime.now().minusMinutes(7));
            robot7.setLocation("Station 3");

            robotRepository.saveAll(Arrays.asList(robot1, robot2, robot3, robot4, robot5, robot6, robot7));
        }
    }
}
