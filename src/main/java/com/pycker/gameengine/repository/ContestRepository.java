package com.pycker.gameengine.repository;

import com.pycker.gameengine.domain.Contest;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Contest entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContestRepository extends JpaRepository<Contest, Long> {

}
