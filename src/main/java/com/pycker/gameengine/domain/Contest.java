package com.pycker.gameengine.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Contest.
 */
@Entity
@Table(name = "contest")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Contest implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "contest")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Announcement> announcements = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Announcement> getAnnouncements() {
        return announcements;
    }

    public Contest announcements(Set<Announcement> announcements) {
        this.announcements = announcements;
        return this;
    }

    public Contest addAnnouncement(Announcement announcement) {
        this.announcements.add(announcement);
        announcement.setContest(this);
        return this;
    }

    public Contest removeAnnouncement(Announcement announcement) {
        this.announcements.remove(announcement);
        announcement.setContest(null);
        return this;
    }

    public void setAnnouncements(Set<Announcement> announcements) {
        this.announcements = announcements;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Contest)) {
            return false;
        }
        return id != null && id.equals(((Contest) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Contest{" +
            "id=" + getId() +
            "}";
    }
}