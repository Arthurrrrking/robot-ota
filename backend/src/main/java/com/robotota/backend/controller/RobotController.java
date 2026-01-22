package com.robotota.backend.controller;

import com.robotota.backend.entity.Robot;
import com.robotota.backend.service.RobotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/robots")
public class RobotController {

    @Autowired
    private RobotService robotService;

    @GetMapping
    public ResponseEntity<List<Robot>> getAllRobots() {
        List<Robot> robots = robotService.getAllRobots();
        return ResponseEntity.ok(robots);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Robot> getRobotById(@PathVariable String id) {
        return robotService.getRobotById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Robot> updateRobotStatus(@PathVariable String id, @RequestBody StatusUpdateRequest request) {
        Robot updatedRobot = robotService.updateRobotStatus(id, request.getStatus());
        return ResponseEntity.ok(updatedRobot);
    }

    @PostMapping("/{id}/upgrade")
    public ResponseEntity<Robot> upgradeRobot(@PathVariable String id, @RequestBody UpgradeRequest request) {
        Robot updatedRobot = robotService.upgradeRobot(id, request.getVersion());
        return ResponseEntity.ok(updatedRobot);
    }

    // Request DTOs
    public static class StatusUpdateRequest {
        private String status;

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }
    }

    public static class UpgradeRequest {
        private String version;

        public String getVersion() {
            return version;
        }

        public void setVersion(String version) {
            this.version = version;
        }
    }
}
